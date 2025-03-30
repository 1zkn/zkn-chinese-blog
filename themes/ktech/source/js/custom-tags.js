// 添加alert标签支持
hexo.extend.tag.register('alert', function(args, content) {
    const type = args[0] || 'info'; // 默认为info类型
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
  
  // 添加code标签支持（行内代码已由Markdown处理，这是用于代码块）
  hexo.extend.tag.register('code', function(args, content) {
    const lang = args[0] || '';
    return `<pre><code class="language-${lang}">${content}</code></pre>`;
  }, {ends: true});
  
  // 添加mono标签支持（等宽字体）
  hexo.extend.tag.register('mono', function(args, content) {
    return `<span class="font-mono text-orange-600">${content}</span>`;
  }, {ends: true});