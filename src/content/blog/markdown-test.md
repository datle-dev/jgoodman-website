---
title: "Markdown Test Post"
draft: False
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

## Text
This is Markdown rendered to HTML.
Text on a new line of the *.md file is shown as a new sentence.

Having one blank line between sentences creates a new paragraph.

Text can be made **bold**, *italicized*, or ***both***.
You can ~~strikethrough~~ and <mark>highlight</mark>.
You can subscript and superscript:
H<sub>2</sub>O and x<sup>2</sup>.

Raw links render as navigable links:
https://www.google.com

You can also annotate your links like this:
[Markdown Guide](https://www.markdownguide.org/basic-syntax/)

## Lists

Lists can be unordered:

- item
- item
- item
  - indented item
  - indented item

...ordered:

1. item
2. item
3. item
   1. indented item
   2. indented item

...or mixed:

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

## Checklists

Checklist items can be checked or unchecked.

- [x] task 1, checked
- [ ] task 2, unchecked
- [ ] task 3, unchecked

## Tables

You can create tables for displaying tabular data.

| header 1 | header 2 | header 3 |
| -------- | -------- | -------- |
| one      | two      | three    |
| 1        | 2        | 3        |

Table columns can be justified.
No justification defaults to left-justified.

| no justify | left justified | center justified | right justified |
| ---------- | :------------- | :--------------: | --------------: |
| none       | left           |      center      |           right |
| none       | left           |      center      |           right |
| none       | left           |      center      |           right |

## Code

Code can be written inline and will render as monospace like `this`.

Code can also be put into code blocks with automatic syntax highlighting.
```python
import dataclass

@dataclass
class thing:
    name: str
    count: int
```

## Blockquotes

This is text before blockquote

> This is a blockquote,
> > This is a nested blockquote.
> 
> -Somebody famous

And this is text after a blockquote.

## Footnotes
This paragraph has footnotes[^1].
The link takes you to the bottom of the page to a section called "Footnotes."
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

## Definitions
Vocabulary 1
: Definition of vocabulary 1

Vocabulary 2
: Definition of vocabulary 2
: Alternate definition or extra info

