=====================
Test 01
=====================
a b
---------------------

(source_file
	(text)
	(text))


=====================
Test 02
=====================
#a b
---------------------

(source_file
	(ident)
	(text))


=====================
Test 03
=====================
Hello #hey World!
---------------------

(source_file
	(text)
	(ident)
	(text))


=====================
Test 04
=====================
Hello #a + b World!
---------------------

(source_file
	(text)
	(ident)
	(text)
	(text)
	(text))


=====================
Test 05
=====================
Hello #(a + b) World!
---------------------

(source_file
	(text)
	(group
		(add
			(ident)
			(ident)))
	(text))


=====================
Test 06
=====================
#(a + b + c)
---------------------

(source_file
	(group
		(add
			(add
				(ident)
				(ident))
			(ident))))


=====================
Test 07
=====================
#(a + b * c)
---------------------

(source_file
	(group
		(add
			(ident)
			(mul
				(ident)
				(ident)))))


=====================
Test 08
=====================
#(a * b + c)
---------------------

(source_file
	(group
		(add
			(mul
				(ident)
				(ident))
			(ident))))


=====================
Test 09
=====================
#(a() + c)
---------------------

(source_file
	(group
		(add
			(call
				item: (ident)
				(group))
			(ident))))


=====================
Test 10
=====================
#a() Hello
---------------------

(source_file
	(call
		item: (ident)
		(group))
	(text))


=====================
Test 11
=====================
#a()Hello
---------------------

(source_file
	(call
		item: (ident)
		(group))
	(text))


=====================
Test 12
=====================
#a!Hello
---------------------

(source_file
	(ident)
	(text))


=====================
Test 13
=====================
#a()()Hello
---------------------

(source_file
	(call
		item: (call
			item: (ident)
			(group))
		(group))
	(text))


=====================
Test 14
=====================
#[Hello World!]
---------------------

(source_file
	(content
		(text)
		(text)))


=====================
Test 15
=====================
#{a}
---------------------

(source_file
	(block
		(ident)))


=====================
Test 16
=====================
#(a, b)
---------------------

(source_file
	(group
		(ident)
		(ident)))


=====================
Test 17
=====================
#(a, c: b)
---------------------

(source_file
	(group
		(ident)
		(tagged
			field: (ident)
			(ident))))


=====================
Test 18
=====================
#hello(a, c: b)
---------------------

(source_file
	(call
		item: (ident)
		(group
			(ident)
			(tagged
				field: (ident)
				(ident)))))


=====================
Test 19
=====================
#hello(a, c: b)World
---------------------

(source_file
	(call
		item: (ident)
		(group
			(ident)
			(tagged
				field: (ident)
				(ident))))
	(text))


=====================
Test 20
=====================
#hello()[World]
---------------------

(source_file
	(call
		item:
		(call
			item: (ident)
			(group))	
		(content
			(text))))


=====================
Test 21
=====================
#if a {} else {}
---------------------

(source_file
	(branch
		test: (ident)
		(block)
		(block)))


=====================
Test 22
=====================
#if a {} elsa {}
---------------------

(source_file
	(condition
		test: (ident)
		(block))
	(text)
	(text))


=====================
Test 23
=====================
#if a {} elsee {}
---------------------

(source_file
	(condition
		test: (ident)
		(block))
	(text)
	(text))


=====================
Test 24
=====================
a b
c

d e
---------------------

(source_file
	(text)
	(text)
	(text)
	(break)
	(text)
	(text))


=====================
Test 25
=====================
#if a{}


else[]
---------------------

(source_file
	(branch
		test: (ident)
		(block)
		(content)))


=====================
Test 26
=====================
#if a[]{}
---------------------

(source_file
	(condition
		test: (call
			item: (ident)
			(content))
		(block)))


=====================
Test 27
=====================
#if a []{}
---------------------

(source_file
	(condition
		test: (ident)
		(content))
	(text))


=====================
Test 28
=====================
#if(a)[]{}
---------------------

(source_file
	(condition
		test: (call
			item: (group
				(ident))
			(content))
		(block)))


=====================
Test 29
=====================
#if(a) + b[]{}
---------------------

(source_file
	(condition
		test: (add
			(group
				(ident))
			(call
				item: (ident)
				(content)))
		(block)))


=====================
Test 30
=====================
*hello* world
---------------------

(source_file
	(strong
		(text))
	(text))


=====================
Test 31
=====================
_hello_ world
---------------------

(source_file
	(emph
		(text))
	(text))


=====================
Test 32
=====================
*hello _world_*
---------------------

(source_file
	(strong
		(text)
		(emph
			(text))))


=====================
Test 33
=====================
#ifa {}
---------------------

(source_file
	(ident)
	(text))


=====================
Test 34
=====================
#if a {} else {}()
---------------------

(source_file
	(call
		item: (branch
			test: (ident)
			(block)
			(block))
		(group)))


=====================
Test 35
=====================
#let a = b
---------------------

(source_file
	(let
		pattern: (ident)
		value: (ident)))


=====================
Test 36
=====================
#let a = b;Hello
---------------------

(source_file
	(let
		pattern: (ident)
		value: (ident))
	(text))


=====================
Test 37
=====================
#a; Hello
---------------------

(source_file
	(ident)
	(text))


=====================
Test 38
=====================
#{
	let a = b
	a + a
}
---------------------

(source_file
	(block
		(let
			pattern: (ident)
			value: (ident))
	(add
		(ident)
		(ident))))


=====================
Test 39
=====================
#(4.2)
---------------------

(source_file
	(group
		(float)))


=====================
Test 40
=====================
#(4.2em)
---------------------

(source_file
	(group
		(float
			(unit))))


=====================
Test 41
=====================
#3
---------------------

(source_file
	(int))


=====================
Test 42
=====================
#3.2
---------------------

(source_file
	(float))


=====================
Test 43
=====================
#a.b
---------------------

(source_file
	(field
		(ident)
		field: (ident)))


=====================
Test 44
=====================
Hello #a

World
---------------------

(source_file
	(text)
	(ident)
	(break)
	(text))


=====================
Test 45
=====================
Hello #a
World
---------------------

(source_file
	(text)
	(ident)
	(text))


=====================
Test 46
=====================
Hello #a




World
---------------------

(source_file
	(text)
	(ident)
	(break)
	(text))


=====================
Test 47
=====================
*_hello_ world*
---------------------

(source_file
	(strong
		(emph
			(text))
		(text)))


=====================
Test 48
=====================
*_*hello*_ world*
---------------------

(source_file
	(strong
		(emph
			(strong
				(text)))
		(text)))


=====================
Test 49
=====================
Hello\nWorld
---------------------

(source_file
	(text
		(escape)))


=====================
Test 50
=====================
Hello\#World
---------------------

(source_file
	(text
		(escape)))


=====================
Test 51
=====================
#[
	Hello
]
---------------------

(source_file
	(content
		(text)))


=====================
Test 52
=====================


a b


---------------------

(source_file
	(break)
	(text)
	(text)
	(break))


=====================
Test 53
=====================
a#[

b

]c
---------------------

(source_file
	(text)
	(content
		(break)
		(text)
		(break))
	(text))


=====================
Test 54
=====================
a#[
b

]c
---------------------

(source_file
	(text)
	(content
		(text)
		(break))
	(text))


=====================
Test 55
=====================
a#[
b
]c
---------------------

(source_file
	(text)
	(content
		(text))
	(text))


=====================
Test 56
=====================
a

---------------------

(source_file
	(text))


=====================
Test 57
=====================
// Hey
---------------------

(source_file
	(comment))


=====================
Test 58
=====================
// Hey


---------------------

(source_file
	(comment))


=====================
Test 59
=====================
#/**/let a = 0
---------------------

(source_file
	(comment)
	(let
		pattern: (ident)
		value: (int)))


=====================
Test 60
=====================
#let /* HEY */ a = 0
---------------------

(source_file
	(let
		(comment)
		pattern: (ident)
		value: (int)))


=====================
Test 61
=====================
#set text(a: 0)
---------------------

(source_file
	(set
		(call
			item: (ident)
			(group
				(tagged
					field: (ident)
					(int))))))


=====================
Test 62
=====================
#{
	set text()
}
---------------------

(source_file
	(block
		(set
			(call
				item: (ident)
				(group)))))


=====================
Test 63
=====================
#{
	set text()


	[Hey]
}
---------------------

(source_file
	(block
		(set
			(call
				item: (ident)
				(group)))
		(content
			(text))))


=====================
Test 64
=====================
#"a"4
---------------------

(source_file
	(string)
	(text))


=====================
Test 65
=====================
#"a\""4
---------------------

(source_file
	(string
		(escape))
	(text))


=====================
Test 66
=====================
#import "a"
---------------------

(source_file
	(import
		(string)))


=====================
Test 67
=====================
#import "a": a, b
---------------------

(source_file
	(import
		(string)
		(ident)
		(ident)))


=====================
Test _
=====================
---------------------

(source_file
	)
