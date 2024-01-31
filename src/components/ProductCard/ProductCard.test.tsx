import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import {BrowserRouter} from "react-router-dom";


describe('ProductCard', () => {
    test("renders the ProductCard component",() => {
        render(
            <BrowserRouter>
                <ProductCard id={1} product={{name: 'Some Name', description: 'Some Description'}}/>
            </BrowserRouter>
        );

        expect(screen.getByRole('heading')).toHaveTextContent('Some Name');
    })
});