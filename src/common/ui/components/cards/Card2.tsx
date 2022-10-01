import { Card, Col, Text } from '@nextui-org/react';

export function Card2() {
  return (
    <Card css={{ w: '100%' }}>
      <Card.Header css={{ position: 'absolute', top: 5, zIndex: 1 }}>
        <Col>
          <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
            Plant a tree
          </Text>
          <Text h4 color='white'>
            Contribute to the planet
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src='https://nextui.org/images/card-example-3.jpeg'
        width='100%'
        height={340}
        objectFit='cover'
        alt='Card image background'
      />
    </Card>
  );
}
