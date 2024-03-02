---
title: "Markdown Test Post"
isDraft: False
tags: ["markdown", "typography"]
category: "test"
publishDate: 2024-03-01
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

**bold**, *italicized*, or ***both***

| header 1 | header 2 | header 3 |
| -------- | -------- | -------- |
| one      | two      | three    |
| 1        | 2        | 3        |

| no justify | left justified | center justified | right justified |
| ---------- | :------------- | :--------------: | --------------: |
| none       | left           |      center      |           right |
| none       | left           |      center      |           right |
| none       | left           |      center      |           right |

- item
- item
- item
  - indented item
  - indented item

1. item
2. item
3. item
   1. indented item
   2. indented item

- item
- item
  1. item
  2. item
- item

1. item
2. item
    - item
    - item
3. item

inline code looks like `this`



```python
import dataclass

@dataclass
class thing:
    name: str
    count: int
```

horizontal rules

---

before block quote

> this is a block quote
> 
> and the second line of it
>
> > this is a nested blockquote
> > this is a nested blockquote

after the block quote

This paragraph has footnotes[^1].
The link takes you to the bottom of the page.
It can even have big footnotes[^bignote].

[^1]: First footnote, and a link to take you back to where the footnote was used
[^bignote]: Here's a larger footnote.
    Indent to include them in the larger footnote.

    You can even skip lines to a new paragraph.

    ```json
    {
        "name": "Backstreet Boys",
        "genre": "pop"
    }
    ```

Vocabulary 1
: Definition of vocabulary 1

Vocabulary 2
: Definition of vocabulary 2
: Alternate definition or extra info

~~strikethrough~~

- [x] task 1, checked
- [ ] task 2, unchecked
- [ ] task 3, unchecked

:eggplant:
:skull:
:weary:

==highlight==

H~2~O
x^2^

Links look like this:
[Markdown Guide](https://www.markdownguide.org/basic-syntax/)