type Props = {
  value: string;
};

export function PageTitle({ value }: Props) {
  return <h1>{value}</h1>;
}