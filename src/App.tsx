import * as React from "react";
import { ChakraProvider, Box, Text, VStack, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
// theme
import MyCustomTheme from "./theme/MyCustomTheme";

export const App = () => (
  <ChakraProvider resetCSS={true} theme={MyCustomTheme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>Pronto para iniciar</Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
