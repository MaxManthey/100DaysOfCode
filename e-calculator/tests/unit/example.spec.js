import { mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

test('Add 1 to display', async () => {
  // it('adds to display', async () => {
    const wrapper = mount(Calculator)
    const oneBtn = wrapper.find('#one-btn')
    const resultText = wrapper.find('#result-text')

    await oneBtn.trigger('click')

    expect(resultText.text()).toContain('1')
  // })
})

test('substraction', async () => {
  // it('adds to display', async () => {
    const wrapper = mount(Calculator)
    const oneBtn = wrapper.find('#one-btn')
    const subBtn = wrapper.find('#sub-btn') 
    const resultText = wrapper.find('#result-text')
    const eqBtn = wrapper.find('#bottom-right-btn')

    await oneBtn.trigger('click')
    await oneBtn.trigger('click')
    await subBtn.trigger('click')
    await oneBtn.trigger('click')
    await eqBtn.trigger('click')

    expect(resultText.text()).toContain('10')
  // })
})