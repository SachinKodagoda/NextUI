import { Grid } from '@nextui-org/react';

import { Card1 } from '@components/cards/Card1';
import { Card2 } from '@components/cards/Card2';
import { Card3 } from '@components/cards/Card3';
import { Card4 } from '@components/cards/Card4';
import { Card5 } from '@components/cards/Card5';

export default function App() {
  return (
    <Grid.Container gap={2} justify='center'>
      <Grid xs={12} sm={4}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={7}>
        <Card5 />
      </Grid>
    </Grid.Container>
  );
}
