// function join(elem, sep) {
//   return seq(elem, repeat(seq(sep, elem)));
// }
function zebra(zeb, ra) {
  return seq(optional(ra), (repeat(seq(zeb, ra))), optional(zeb));
}
// function list(elem, sep) {
//   return seq(
//       repeat(seq(elem, sep)),
//       optional(elem),
//   );
// }
module.exports = grammar({
  name: 'typst',
  extras: $ => [],
  conflicts: $ => [
    [$._4, $.mul],
    [$._4_left_safe, $.mul_left_safe],
    [$._5, $.add],
    [$.field, $.add],
    [$.add, $.mul],
    [$.add_left_safe, $.mul],
    [$.branch, $.condition],
  ],
  rules: {
    source_file: $ => optional(choice(
      $._tail_init_space,
      $._tail_line,
      $._tail_init_text,
      $._tail_escape,
      $._tail_strong,
    )),

    break: $ => $._line,

    // TAIL INIT
    _tail_init_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_escape,
      $._tail_strong,
   ))),
    _tail_init_text: $ => seq($._text_next_space, optional(choice(
      $._tail_text_space,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_init_strong: $ => seq($.strong, optional(choice(
      $._tail_init_space,
      $._tail_init_text,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_init_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_escape,
   ))),
    _strong_tail_init_text: $ => seq($._text_next_space, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_escape,
    ))),

    // TAIL LINE
    _tail_line: $ => seq($._line, optional(choice(
      $._tail_space_text,
      $._tail_escape,
      $._tail_strong,
      seq($.break, choice(
        $._tail_init_space,
        $._tail_init_text,
        $._tail_escape,
        $._tail_strong,
      )),
    ))),
    _strong_tail_line: $ => seq($._line, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_escape,
    ))),

    // TAIL SPACE
    _tail_space_text: $ => seq($._text_next_space, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_space_text: $ => seq($._text_next_space, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL TEXT
    _tail_text_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_text_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL IDENT
    _tail_ident_text: $ => seq($._text_next_ident, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_ident_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_ident_text: $ => seq($._text_next_ident, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),
    _strong_tail_ident_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL CALL
    _tail_call_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_call_text: $ => seq($._text_next_call, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_call_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),
    _strong_tail_call_text: $ => seq($._text_next_call, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL GROUP
    _tail_group_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_group_text: $ => seq($._text_next_group, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_group_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),
    _strong_tail_group_text: $ => seq($._text_next_group, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL CONTENT
    _tail_content_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_content_text: $ => seq($._text_next_content, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_content_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),
    _strong_tail_content_text: $ => seq($._text_next_content, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL BLOCK
    _tail_block_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_block_text: $ => seq($._text_next_block, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_block_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),
    _strong_tail_block_text: $ => seq($._text_next_block, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL BRANCH
    _tail_branch_space: $ => seq($._space, optional(choice(
      $._tail_space_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_branch_text: $ => seq($._text_next_branch, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_branch_space: $ => seq($._space, optional(choice(
      $._strong_tail_space_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),
    _strong_tail_branch_text: $ => seq($._text_next_branch, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // TAIL CONDITION
    _tail_condition_space: $ => seq($._space, optional(choice(
      $._tail_condition_text,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _tail_condition_text: $ => seq($._text_next_condition, optional(choice(
      $._tail_text_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    _strong_tail_condition_space: $ => seq($._space, optional(choice(
      $._strong_tail_condition_text,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),
    _strong_tail_condition_text: $ => seq($._text_next_condition, optional(choice(
      $._strong_tail_text_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ))),

    // STRONG
    strong: $ => seq('*', choice(
      $._strong_tail_init_text,
      $._strong_tail_init_space,
      $._strong_tail_line,
      $._strong_tail_escape,
    ), '*'),
    _tail_strong: $ => seq($.strong, optional(choice(
      $._tail_init_text,
      $._tail_init_space,
      $._tail_line,
      $._tail_escape,
      $._tail_strong,
    ))),
    // _strong_tail_init_text: $ => seq($._text_in_strong, optional(choice(
    //   $._tail_text
    // ))),

    // ESCAPE
    _tail_escape: $ => seq('#', choice(
      seq($.ident, optional(choice(
        $._tail_ident_text,
        $._tail_ident_space,
        $._tail_line,
        $._tail_escape,
        $._tail_strong,
      ))),
      seq($.group, optional(choice(
        $._tail_group_text,
        $._tail_group_space,
        $._tail_line,
        $._tail_escape,
        $._tail_strong,
      ))),
      seq($.content, optional(choice(
        $._tail_content_text,
        $._tail_content_space,
        $._tail_line,
        $._tail_escape,
        $._tail_strong,
      ))),
      seq($.block, optional(choice(
        $._tail_block_text,
        $._tail_block_space,
        $._tail_line,
        $._tail_escape,
        $._tail_strong,
      ))),
      seq($.call, optional(choice(
        $._tail_call_text,
        $._tail_call_space,
        $._tail_line,
        $._tail_escape,
        $._tail_strong,
      ))),
      seq($.branch, optional(choice(
        $._tail_branch_text,
        $._tail_branch_space,
        $._tail_line,
        $._tail_escape,
        $._tail_strong,
      ))),
      seq($.condition, optional(choice(
        $._tail_condition_text,
        $._tail_condition_space,
        $._tail_line,
        $._tail_escape,
        $._tail_strong,
      ))),
    )),
    _strong_tail_escape: $ => seq('#', choice(
      seq($.ident, optional(choice(
        $._strong_tail_ident_text,
        $._strong_tail_ident_space,
        $._strong_tail_line,
        $._strong_tail_escape,
      ))),
      seq($.group, optional(choice(
        $._strong_tail_group_text,
        $._strong_tail_group_space,
        $._strong_tail_line,
        $._strong_tail_escape,
      ))),
      seq($.content, optional(choice(
        $._strong_tail_content_text,
        $._strong_tail_content_space,
        $._strong_tail_line,
        $._strong_tail_escape,
      ))),
      seq($.block, optional(choice(
        $._strong_tail_block_text,
        $._strong_tail_block_space,
        $._strong_tail_line,
        $._strong_tail_escape,
      ))),
      seq($.call, optional(choice(
        $._strong_tail_call_text,
        $._strong_tail_call_space,
        $._strong_tail_line,
        $._strong_tail_escape,
      ))),
      seq($.branch, optional(choice(
        $._strong_tail_branch_text,
        $._strong_tail_branch_space,
        $._strong_tail_line,
        $._strong_tail_escape,
      ))),
      seq($.condition, optional(choice(
        $._strong_tail_condition_text,
        $._strong_tail_condition_space,
        $._strong_tail_line,
        $._strong_tail_escape,
      ))),
    )),


    text: $ => /.+/,
    _text_next_space: $ => alias(/[^# \t\n\]\*]+/, $.text),
    _text_next_ident: $ => alias(/[^# \t\n\[\*\]\(a-zA-Z][^# \t\n\]\*]*/, $.text),
    _text_next_call: $ => alias(/[^# \t\n\(\[\*\]][^# \t\n\]\*]*/, $.text),
    _text_next_group: $ => alias(/[^# \t\n\(\[\*\]][^# \t\n\]\*]*/, $.text),
    _text_next_content: $ => alias(/[^# \t\n\[\*\(\]][^# \t\n\]\*]*/, $.text),
    _text_next_block: $ => alias(/[^# \t\n\(\[\*\]][^# \t\n\]\*]*/, $.text),
    _text_next_branch: $ => alias(/[^# \t\n\(\[\*\]][^# \t\n\]\*]*/, $.text),
    _text_next_condition: $ => alias(/(else[^ \t\n\*\+\!\(\{]|els[^e]|el[^s]|e[^l]|[^e# \t\n\(\[\*\]])[^# \t\n\]\*]*/, $.text),
    _space: $ => /[ \t]+/,
    _line: $ => '\n',
    // _space_line: $ => /[\n \t]+/,

    // PRECEDENCES
    _0: $ => choice(
      $.ident,
      $.group,
      $.content,
    ),
    _0_left_safe: $ => choice(
      $.group,
      $.content,
    ),
    _1: $ => choice(
      $._0,
      $.branch,
      $.condition,
    ),
    _1_left_safe: $ => choice(
      $._0_left_safe,
    ),
    _2: $ => choice(
      $._1,
      $.call,
    ),
    _2_left_safe: $ => choice(
      $._1_left_safe,
      alias($.call_left_safe, $.call),
    ),
    _3: $ => choice(
      $._2,
      $.mul,
    ),
    _3_left_safe: $ => choice(
      $._2_left_safe,
      alias($.mul_left_safe, $.mul),
    ),
    _4: $ => choice(
      $._3,
      $.add,
    ),
    _4_left_safe: $ => choice(
      $._3_left_safe,
      alias($.add_left_safe, $.add),
    ),
    _5: $ => choice(
      $._4,
      $.field,
    ),
    _6: $ => choice(
      $._5,
      $._list,
    ),

    // EXPRETIONS
    group: $ => seq(
      '(',
      optional($._space),
      optional(seq($._6, optional($._space))),
      ')'
    ),
    block: $ => seq(
      '{',
      optional($._space),
      optional(seq($._6, optional($._space))),
      '}'
    ),
    content: $ => seq(
      '[',
      optional(choice(
        $._tail_init_space,
        $._tail_init_text,
        $._tail_escape,
        $._tail_strong,
      )),
      ']',
    ),
    _list: $ => seq($._6, optional($._space), ',', optional($._space), $._5),
    field: $ => seq(field('field', $.ident), ':', optional($._space), $._4),
    add: $ => seq($._4, optional($._space), '+', optional($._space), $._3),
    add_left_safe: $ => seq($._4_left_safe, optional($._space), '+', optional($._space), $._3),
    mul: $ => seq($._3, optional($._space), '*', optional($._space), $._2),
    mul_left_safe: $ => seq($._3_left_safe, optional($._space), '*', optional($._space), $._2),
    call: $ => seq(field('item', $._2), choice($.group, $.content)),
    call_left_safe: $ => seq(field('item', $._2_left_safe), choice($.group, $.content)),
    branch: $ => seq(
      'if',
      field('test', choice(
        seq($._space, $._4),
        $._4_left_safe,
      )),
      choice(
        seq($._space, choice($.block, $.content)),
        $.block,
      ),
      zebra($._space, repeat1($._line)),
      'else',
      optional($._space),
      choice($.block, $.content),
    ),
    condition: $ => seq(
      'if',
      field('test', choice(
        seq($._space, $._4),
        $._4_left_safe,
      )),
      choice(
        seq($._space, choice($.block, $.content)),
        $.block,
      ),
    ),
    ident: $ => /[a-zA-Z]+/,
  }
});

