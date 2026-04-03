import { mount } from '@vue/test-utils'
import ButtonApp from '../ButtonApp.vue'
import { expect } from 'vitest';

describe('Button', () => {
    it('renders text correctly', () => {
        const wrapper = mount(ButtonApp, {
            props: {
                title: 'Salvar',
                mode: 'text',
            }
        })

        expect(wrapper.text()).toContain('Salvar')
    });

    it('renders icon correctly', () => {
        const wrapper = mount(ButtonApp, {
            props: {
                mode: 'icon',
                icon: 'mdi-home',
            }
        })

        expect(wrapper.html()).toContain('mdi-home')
    });

    it('trigger event on click', async () => {
        const wrapper = mount(ButtonApp, {
            props: {
                title: 'Salvar',
            }
        })

        await wrapper.trigger('click')

        expect(wrapper.emitted('click')).toBeTruthy()
    });
})