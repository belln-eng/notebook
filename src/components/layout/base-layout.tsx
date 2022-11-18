import { Box, BoxProps } from '@chakra-ui/react';

type Props = {
} & BoxProps;

export const BaseLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Box
        id="baseLayout"
      // bg={'starkWhite'}
      // css={`min-height: 100vh; min-height: -webkit-fill-available`}
      // minHeight='100vh'
      // minHeight={['100vh', '-webkit-fill-available']}
      >
        {children}
      </Box>
    </>
  );
};