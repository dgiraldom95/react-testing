import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Like from '../Like';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Like', () => {
  test('Default value is 0', async () => {
    const likesP = container.querySelector('#num-likes');
    expect(likesP.textContent).toEqual('Likes: 0');
  });

  test('Pressing like increases number of likes', async () => {
    const likeB = container.querySelector('#increment');
    act(() => {
      likeB.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const likesP = container.querySelector('#num-likes');
    expect(likesP.textContent).toEqual('Likes: 1');
  });

  test('Pressing dislike decreases number of likes', async () => {
    const dislikeB = container.querySelector('#decrement');
    act(() => {
      dislikeB.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const likesP = container.querySelector('#num-likes');
    expect(likesP.textContent).toEqual('Likes: -1');
  });
});
