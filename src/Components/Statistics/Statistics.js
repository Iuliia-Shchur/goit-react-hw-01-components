import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className="s.statistics">
      {title && <h2 className="s.title">{title}</h2>}

      <ul className="s.stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="s.item">
            <span className="s.label">{label}</span>
            <span className="s.percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propsType = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
