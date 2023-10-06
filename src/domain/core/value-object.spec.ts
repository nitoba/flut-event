import { ValueObject } from '.'

describe('Value Objects test', () => {
  type ValueObjectProps = {
    value: string
  }

  class Email extends ValueObject<ValueObjectProps> {
    protected constructor(readonly value: ValueObjectProps) {
      super(value)
    }

    static create(value: string): Email {
      return new Email({ value })
    }
  }

  it('should be able to return the value on value object', () => {
    const email = Email.create('email@email.com')

    expect(email.props.value).toBe('email@email.com')
  })
})
