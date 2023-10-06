import { Result } from '.'

describe('Result test', () => {
  it('should be able to result ok in result success', () => {
    function testResult() {
      return Result.ok('result ok')
    }

    expect(testResult().isSuccess).toBeTruthy()
  })

  it('should be able to result fail in result fail', () => {
    function testResult() {
      return Result.fail<string>('result ok')
    }

    expect(testResult().isFailure).toBeTruthy()
  })
})
