import IcoMoon from "react-icomoon";

import iconSet from '../../../data/selection.json'

const Icon = ({ ...props }) => {
  // @ts-ignore
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
