import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import type { ResponseOutput } from 'src/pages/api/create-secret';
import type { Page, VFC } from 'src/types';

interface ShareDataProps {
  id: string;
  secret: string;
}

const ShareData: VFC<ShareDataProps> = ({ id, secret }) => {
  return (
    <>
      <div>
        <p>Share this link:</p>
        <input type="text" value={`http://baseUrl/${id}`} readOnly />
      </div>
      <div>
        <p>Secret:</p>
        <textarea value={secret} readOnly />
      </div>
    </>
  );
};

const Home: Page = () => {
  const [secretData, setSecretData] = useState<ShareDataProps>();

  const onSubmit = async (
    evt: SyntheticEvent<HTMLFormElement>,
  ): Promise<void> => {
    evt.preventDefault();

    const formData: FormData = new FormData(evt.currentTarget);
    const formValues: Record<string, string> = Object.fromEntries(
      formData.entries(),
    ) as Record<string, string>;

    const res: AxiosResponse<ResponseOutput> = await axios.post(
      '/api/create-secret',
      formValues,
    );

    if (res.data.data?.id) {
      setSecretData({ id: res.data.data?.id, secret: formValues.secret });
    }
  };

  if (secretData) {
    return <ShareData {...secretData} />;
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea name="secret"></textarea>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

Home.pageTitle = 'Create secret';

export default Home;
