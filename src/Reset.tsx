type Props = {
  onClick: () => void;
};

export function Reset({ onClick }: Props) {
  console.log('render reset');
  return <button onClick={onClick}>Reset</button>;
}
