hexo.extend.tag.register('alert', function(args, content) {
    const type = args[0] || 'info'; 
    const colorMap = {
      info: 'blue',
      success: 'green',
      warning: 'amber',
      error: 'red'
    };
    const color = colorMap[type] || 'blue';
    
    return `<div class="my-4 p-4 border-l-4 border-${color}-500 bg-${color}-50 text-${color}-700">
      ${hexo.render.renderSync({text: content, engine: 'markdown'})}
    </div>`;
  }, {ends: true});
  
  
  hexo.extend.tag.register('code', function(args, content) {
    const lang = args[0] || '';
    return `<pre><code class="language-${lang}">${content}</code></pre>`;
  }, {ends: true});
  
 
  hexo.extend.tag.register('mono', function(args, content) {
    return `<span class="font-mono text-orange-600">${content}</span>`;
  }, {ends: true});