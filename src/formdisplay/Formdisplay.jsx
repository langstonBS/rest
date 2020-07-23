import React from 'react';
import PropTypes from 'prop-types';

const FormDisplay = ({ submitType, url, body, onChange }) => (
  <>
    <form>
      <input type="text" name="url" value={url} onChange={onChange} />
      <div className="radio">
          <label>
            <input type="radio" value="post" checked={submitType === 'post'} onChange={onChange} />
            Post
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="get" name="get" checked={submitType === 'get'} onChange={onChange} />
            get
          </label>
      </div>
       <div className="radio">
          <label>
            <input type="radio" value="put" name="put" checked={submitType === 'put'} onChange={onChange} />
            PUT
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Delete" name="Delete" checked={submitType === 'delete'} onChange={onChange} />
            Delete
          </label>
      </div>
      <textarea type='text' value={body} name='input'/>
    </form>
  </>
);

FormDisplay.PropTypes = {
  url: PropTypes.string.isRequired,
  submitType: PropTypes.string.isRequire,
  body: PropTypes.string.isRequire,
  onChange: PropTypes.func.isRequired
}

export default FormDisplay;
