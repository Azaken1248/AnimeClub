import "../../Styles/Panel.css";

interface PanelProps {
  name: string;
}

const Panel = ({ name }: PanelProps) => {
  return <div className="panel">{name}</div>;
};

export default Panel;
