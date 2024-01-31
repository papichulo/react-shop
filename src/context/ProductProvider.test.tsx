import ProductProvider, {ProductContext} from "./ProductProvider.tsx";
import {useContext} from "react";
import {act, render, screen} from "@testing-library/react";

describe('ProductProvider', () => {
    const TestingComponent = () => {
        const { products, searchProducts } = useContext(ProductContext);
        const handleSearch = () => {
            if (searchProducts) {
                searchProducts('');
            }
        }
        return (
            <div>
                <p data-testid="numberOfProducts">{products?.length}</p>
                <button data-testid="searchButton" onClick={handleSearch}/>
            </div>
        );
    };

    test('List is empty on load', () => {
        render(<ProductProvider><TestingComponent/></ProductProvider>);
        expect(screen.getByTestId('numberOfProducts')).toHaveTextContent(0);
    });

    test('List contains all products on empty search', () => {
        render(<ProductProvider><TestingComponent/></ProductProvider>);
        const button = screen.getByTestId('searchButton');
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(screen.getByTestId('numberOfProducts')).toHaveTextContent(2);
    });
});