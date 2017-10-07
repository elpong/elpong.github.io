import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

const txt =
`module.exports = {
  selector: 'id',
  collections: {
    pigs: {
      fields: {
        id: {}
      }
    }
  }
};`

class SchemeEditor extends Component {
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        fontSize="14.6px"
        showPrintMargin={false}
        tabSize={2}
        defaultValue={txt}
        highlightActiveLine={false}
        showGutter={false}
        />
    )
  }
}

export default SchemeEditor;
