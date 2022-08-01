import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './CopyInfo.styles';

interface Props {
  inspirationName?: string;
  inspirationHref?: string;
  repoHref?: string;
}

export const CopyInfo = (props: Props) => {
  const {
    repoHref = 'https://github.com/javusScriptus/creative-bay',
    inspirationHref,
    inspirationName,
  } = props;

  return <></>;
};
