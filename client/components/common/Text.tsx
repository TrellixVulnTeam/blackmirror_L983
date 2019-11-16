import styled from 'styled-components/native';

interface Props {
  weight?: 200 | 400 | 500 | 700;
  size?: number;
  color?: string;
}

const Text = styled.Text<Props>`
  font-size: ${props => props.size || 16}px;
  color: ${props => props.color || '#222'};
  font-weight: ${props => props.weight || 400};
`;

export default Text;
