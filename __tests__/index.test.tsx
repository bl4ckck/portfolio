import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        const multiTest: HTMLElement[] = screen.queryAllByText("test lagi") 
        expect(multiTest[0]).toBeInTheDocument()
    })
})