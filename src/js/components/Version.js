import React from 'react';

const Version = (props) =>
    <a
      href={`https://github.com/romaintailhurat/inseejs-react/commit/${props.version}`}
      target="_blank"
    >
      commit
    </a>;

Version.propTypes = {
  version: React.PropTypes.string,
};

export default Version;
