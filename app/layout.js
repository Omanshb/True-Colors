import { Providers } from './providers';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import Title from '../components/title';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Title />
          {children}
        </Providers>
      </body>
    </html>
  );
}
