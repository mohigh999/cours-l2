import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from './Card';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});


afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
  });


it('have an defined img', () => {
act( () => {
    render(<Card/>, container);
});
const img = document.querySelector('.img').getAttribute('src')
expect(img).toBeDefined();
});

it('have an defined h5 text', () => {
    act( () => {
        render(<Card/>, container);
    });
    const h= document.querySelector('.card-title').textContent;
    expect(h).toBeDefined();
});

it('must return data', () => {
    act( () => {
        render(<Card url="./user.json"/>, container);
    });
    const card = document.querySelector("[data-testid='card']");
    console.log(document.querySelector('.img').getAttribute('src'))
    // try to test the result with this url
});