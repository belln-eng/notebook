import { Box, UnorderedList } from '@chakra-ui/react';
import { RoutingPath } from '../../route/routing-path';
import { BaseLayout } from '../layout/base-layout';
import { ListCard } from '../ui/list-card';

export const Home = () => {
  return (
    <BaseLayout>
      <Box as='section' id="home">
        <Box as='h1'>CSS備忘録</Box>
        <Box as='nav'>
          <UnorderedList
            mx={'2rem'}
            display='grid'
            gridTemplateColumns={'repeat(3, 1fr)'}
            gap='1.5rem'
          >
            <ListCard link={{ path: RoutingPath.cssInit, name: 'CSS環境の初期化' }}></ListCard>
            <ListCard link={{ path: RoutingPath.useSass, name: 'Sass導入' }}></ListCard>
            <ListCard link={{ path: RoutingPath.genericFiles, name: '汎用ファイル' }}></ListCard>
            <ListCard link={{ path: RoutingPath.setCss, name: 'セットCSS' }}></ListCard>
            <ListCard link={{ path: RoutingPath.aboutUnit, name: '単位について' }}></ListCard>
            <ListCard link={{ path: RoutingPath.aboutLayout, name: 'レイアウト' }}></ListCard>
            <ListCard link={{ path: RoutingPath.usefulTools, name: '便利ツール' }}></ListCard>
          </UnorderedList>
        </Box>
      </Box>
    </BaseLayout>
  );
};