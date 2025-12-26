import { render, screen } from '@testing-library/react';
import { CardHover, CardGrid } from './CardHover';
import React from 'react';

describe('CardHover Component', () => {
  it('renders title and description', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const icon = <svg data-testid="test-icon" />;

    render(
      <CardHover
        title={title}
        description={description}
        icon={icon}
      />
    );

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByTestId('test-icon')).toBeDefined();
  });

  it('renders within CardGrid', () => {
    const title = 'Grid Item';

    render(
      <CardGrid>
        <CardHover title={title} description="desc" icon={<div />} />
      </CardGrid>
    );

    expect(screen.getByText(title)).toBeDefined();
  });
});
