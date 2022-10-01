import { Button, Card, Col, Row, Text } from '@nextui-org/react';

export function Card5() {
  return (
    <Card css={{ h: '400px', w: '100%' }}>
      <Card.Header css={{ position: 'absolute', top: 5, zIndex: 1 }}>
        <Col>
          <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
            Your day your way
          </Text>
          <Text h3 color='white'>
            Your checklist for better sleep
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src='https://nextui.org/images/card-example-5.jpeg'
          objectFit='cover'
          width='100%'
          height='100%'
          alt='Relaxing app background'
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          bgBlur: '#0f111466',
          borderTop: '$borderWeights$light solid $gray800',
          bottom: 0,
          position: 'absolute',
          zIndex: 1,
        }}>
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src='https://nextui.org/images/breathing-app-icon.jpeg'
                  css={{ bg: 'black', br: '50%' }}
                  height={40}
                  width={40}
                  alt='Breathing app icon'
                />
              </Col>
              <Col>
                <Text color='#d1d1d1' size={12}>
                  Breathing App
                </Text>
                <Text color='#d1d1d1' size={12}>
                  Get a good night&apos;s sleep.
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify='flex-end'>
              <Button flat auto rounded css={{ bg: '#94f9f026', color: '#94f9f0' }}>
                <Text css={{ color: 'inherit' }} size={12} weight='bold' transform='uppercase'>
                  Get App
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
