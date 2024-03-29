import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import Button from './button'

const defaultButton = () => (
  <Button onClick={action('clicked')}>Default button</Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg">Large button</Button>
    <Button size="sm">Small button</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary">Primary button</Button>
    <Button btnType="default">Default Button</Button>
    <Button btnType="danger">Danger button</Button>
    <Button btnType="link" href="https://google.com">Link button</Button>
  </>
)

storiesOf('Button Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      text: 'this is a very nice component',
      inline: true,
      styles: {
        header: {
          h1: {
            marginRight: '20px',
            fontSize: '25px',
            display: 'inline',
          },
          body: {
            paddingTop: 0,
            paddingBottom: 0,
          },
          h2: {
            display: 'inline',
            color: '#999',
          },
        },
        infoBody: {
          backgroundColor: '#eee',
          padding: '0px 5px',
          lineHeight: '2',
        },
      }
    }
  })
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)