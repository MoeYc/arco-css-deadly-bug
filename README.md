# arco-css-deadly-bug

arco css 产物语法错误 bug 复现 demo

```bash
  # 复现方法
  pnpm i
  pnpm dev
```

产物 `arco.css` 和 `arco.min.css` 中的 css 语法是错误的！

```css
.arco-input-tag:not(.arco-input-tag-focus)-clear-icon:hover::before {
  background-color: var(--color-fill-4);
}
```
