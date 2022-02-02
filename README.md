# Responsive Tabs/Accordion

[DEMO](https://akovalenko777.github.io/responsive_tabs/) - try resize browser window
Tabs automaticaly transform into accordion when tabs length more than container.

## Features

* simple HTML markup
* simple vanila JS
* no plugins, no jQuery
* flexible
* easy to customize
* vertical tabs

### HTML markup

You can use button or anchor for tab element.

```
<div class="tabs">
    <button class="tabs__link active" role="tab">Tab 1</button>
    <div class="tabs__content active" role="tabpanel">
        <h3>Tab 1</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta perferendis aperiam repellendus maxime molestias, totam blanditiis ut laudantium laborum quisquam consequatur soluta incidunt amet. Nihil, quaerat maxime! Cupiditate, nesciunt.</p>
    </div>

    <button class="tabs__link" role="tab">Tab 2</button>
    <div class="tabs__content" role="tabpanel">
        <h3>Tab 2</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta perferendis aperiam repellendus maxime molestias, totam blanditiis ut laudantium laborum quisquam consequatur soluta incidunt amet. Nihil, quaerat maxime! Cupiditate, nesciunt.</p>
    </div>
</div>
```

For vertical tabs just add class "tabs--vertical".

```
<div class="tabs tabs--vertical">
    ...
</div>
```

For accordion mode just add class "tabs--accord"

```
<div class="tabs tabs--accord">
    ...
</div>
```

If you want disable automated transformation - just add class "tabs--nojs"

```
<div class="tabs tabs--accord tabs--nojs">
    ...
</div>
```
