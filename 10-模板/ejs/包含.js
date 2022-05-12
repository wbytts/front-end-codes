// 通过 include 指令将相对于模板路径中的模板片段包含进来。(需要提供 'filename' 参数。)
// 例如，如果存在 "./views/users.ejs" 和 "./views/user/show.ejs" 两个模板文件，你可以通过 <%- include('user/show'); %> 代码包含后者。

// 你可能需要能够输出原始内容的标签 (<%-) 用于 include 指令，避免对输出的 HTML 代码做转义处理。

<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
