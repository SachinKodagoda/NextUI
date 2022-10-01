import { Card, Col, Text } from '@nextui-org/react';

export function Card3() {
  return (
    <Card css={{ bg: '$black', w: '100%' }}>
      <Card.Header css={{ position: 'absolute', top: 5, zIndex: 1 }}>
        <Col>
          <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
            Supercharged
          </Text>
          <Text h4 color='white'>
            Creates beauty like a beast
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src='https://nextui.org/images/card-example-2.jpeg'
        width='100%'
        height={340}
        objectFit='cover'
        alt='Card image background'
      />
    </Card>
  );
}
