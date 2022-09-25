import type { NextPage } from 'next';
import type { FC as BaseFC, PropsWithChildren } from 'react';

/**
 * Next.js page.
 */
export type Page = NextPage & {
  /**
   * Browser's page title.
   */
  pageTitle?: string;
};

export interface GenericResponseOutput<
  TData = Record<string, string | number | null>,
> {
  data: null | TData;
  error: null | string;
}

/**
 * Functional Component: with children.
 */
export type FC<Props = Record<string, unknown>> = BaseFC<
  PropsWithChildren<Props>
>;

/**
 * Void Functional Component: without children.
 *
 * The original `React.VFC` is now deprecated.
 */
export type VFC<Props = Record<string, unknown>> = BaseFC<Props>;
