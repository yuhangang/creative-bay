import React, { useEffect, useState, useRef } from 'react';

import { Head } from 'seo/Head/Head';
import { PageProps } from 'utils/sharedTypes';

import * as S from './ShaderBlob.styles';
import { appState } from './ShaderBlob.state';
import { App } from './classes/App';
import { Canvas, useFrame, GroupProps } from '@react-three/fiber';
export default function ShaderBlob(props: PageProps) {
  const { head } = props;

  const rendererEl = useRef<HTMLDivElement | null>(null);
  const [shouldReveal, setShouldReveal] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (!rendererEl.current) return;

    appState.app = new App({ rendererEl: rendererEl.current, setShouldReveal, setProgressValue });

    return () => {
      if (appState.app) {
        appState.app.destroy();
        appState.app = null;
      }
    };
  }, []);

  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.ReadyWrapper shouldReveal={shouldReveal} />
        <S.CanvasWrapper ref={rendererEl} />

        <S.Container visible={shouldReveal}>
          <S.Center>
            <S.Title>COMING SOON</S.Title>
            <S.Subtitle>Work in Progress</S.Subtitle>
          </S.Center>
          <S.Center></S.Center>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
