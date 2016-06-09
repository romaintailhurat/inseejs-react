import React from 'react';

const Version = (props) =>
  <div>
    <a
      href={`https://github.com/romaintailhurat/inseejs-react/commit/${props.version}`}
      target="_blank"
    >
      commit
    </a>
  </div>;

Version.propTypes = {
  version: React.PropTypes.string,
};

export default Version;
