JSONEditor.defaults.themes.atomia = JSONEditor.AbstractTheme.extend({
    getContainer: function() {
        var el = this._super();
        el.class += "card";
        return el;
    },
    getFormInputLabel: function(text) {
      var el = this._super(text);
      el.style.display = 'inline-block';
      el.style.marginRight = '3px';
      el.style.fontWeight = 'bold';
      return el;
    },
    getIndentedPanel: function() {
      var el = this._super();
      el.style.border = '1px solid #ddd';
      el.style.padding = '5px';
      el.style.margin = '10px';
      el.style.borderRadius = '3px';
      return el;
    },
    getTopIndentedPanel: function() {
      return this.getIndentedPanel();
    },
    getChildEditorHolder: function() {
      var el = this._super();
      el.style.marginBottom = '8px';
      return el;
    },
    getFormInputDescription: function(text) {
        return this.getInfoButton(text);
      },
    getHeaderButtonHolder: function() {
      var el = this.getButtonHolder();
      el.style.display = 'inline-block';
      el.style.marginLeft = '10px';
      el.style.fontSize = '.8em';
      el.style.verticalAlign = 'middle';
      return el;
    },
    getButton: function(text, icon, title) {
      var el = this._super(text, icon, title);
      el.className += "button small green";
      return el;
    },
    getTable: function() {
      var el = this._super();
      el.style.borderBottom = '1px solid #ccc';
      el.style.marginBottom = '5px';
      return el;
    },
    addInputError: function(input, text) {
      input.style.borderColor = 'red';
      
      if(!input.errmsg) {
        var group = this.closest(input,'.form-control');
        input.errmsg = document.createElement('div');
        input.errmsg.setAttribute('class','errmsg');
        input.errmsg.style = input.errmsg.style || {};
        input.errmsg.style.color = 'red';
        group.appendChild(input.errmsg);
      }
      else {
        input.errmsg.style.display = 'block';
      }
      
      input.errmsg.innerHTML = '';
      input.errmsg.appendChild(document.createTextNode(text));
    },
    removeInputError: function(input) {
      input.style.borderColor = '';
      if(input.errmsg) input.errmsg.style.display = 'none';
    },
  });
  