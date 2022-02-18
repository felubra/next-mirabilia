import styled from "styled-components"

export const Wrapper = styled.article`
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.lg}px;
  color: var(--color-gray);

  transition: background-color ease-out 0.25s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.babyBlue};
    color: var(--color-black-text, #000);
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.redAccent};

  transition: color ease-out 0.25s;

  ${Wrapper}:hover & {
    text-decoration: underline;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.linkHoverBlue};
  }
`

export const Info = styled.h3`
  font-size: var(--font-size-sm, 1rem);
  margin-top: 3.2px;
  font-style: italic;
  margin-bottom: 4px;

  line-height: 1;
`

export const Authors = styled(Info)`
  margin-bottom: 8px;
`

export const Abstract = styled.p`
  line-height: 1;
  margin-top: var(--spacing-sm, 10px);
  padding: var(--spacing-xs) 0;
  text-align: justify;
`
