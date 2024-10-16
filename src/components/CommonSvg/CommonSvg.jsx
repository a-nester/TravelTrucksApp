import sprite from 'assets/icons/sprite.svg';

export const CommonSvg = ({ width, height, iconId, className = '' }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};
