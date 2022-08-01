import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { globalState } from 'utils/globalState';
import { CopyInfo } from 'sections/CopyInfo/CopyInfo';
import { AuthorInfo } from 'sections/AuthorInfo/AuthorInfo';

import * as S from './Layout.styles';

interface Props {
  isReady: boolean;
  children: React.ReactChild;
  repoHref?: string;
  inspirationName?: string;
  inspirationHref?: string;
}

export const Layout = (props: Props) => {
  const { repoHref, inspirationHref, inspirationName, children, isReady } = props;
  const router = useRouter();

  useEffect(() => {
    if (isReady && !document.body.classList.contains('isReady')) {
      document.body.classList.add('isReady');
    }
    return () => {
      document.body.classList.remove('isReady');
    };
  }, [isReady]);

  const handleBack = () => {
    if (globalState.hasVisitedLanding) {
      router.back();
    } else {
      void router.push({ pathname: '/' });
    }
  };

  return (
    <>
      <S.ReadyWrapper isReady={isReady}></S.ReadyWrapper>
      <S.AppBackground />
      {router.pathname !== '/' && (
        <S.BackWrapper>
          <S.BackBtn onClick={handleBack}>
            <S.BackBtnLabel>Home</S.BackBtnLabel>
          </S.BackBtn>
        </S.BackWrapper>
      )}

      
      {children}
    </>
  );
};
/*
<AuthorInfo />

      <CopyInfo
        repoHref={repoHref}
        inspirationHref={inspirationHref}
        inspirationName={inspirationName}
      />
*/