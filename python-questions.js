const pythonQuestions = [
  {
    id: 1,
    title: "FizzBuzz",
    difficulty: "Easy",
    problem:
      "Write a function `fizzbuzz(n)` that returns a list of strings from 1 to `n`. For multiples of 3 use `'Fizz'`, multiples of 5 use `'Buzz'`, multiples of both use `'FizzBuzz'`, otherwise use the number as a string.",
    signature: "def fizzbuzz(n):",
    starter: "def fizzbuzz(n):\n    # Your code here\n    pass",
    testCases: [
      { input: "fizzbuzz(5)", expected: "['1', '2', 'Fizz', '4', 'Buzz']" },
      { input: "fizzbuzz(15)", expected: "['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']" },
      { input: "fizzbuzz(1)", expected: "['1']" },
    ],
    answer: `def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append('FizzBuzz')
        elif i % 3 == 0:
            result.append('Fizz')
        elif i % 5 == 0:
            result.append('Buzz')
        else:
            result.append(str(i))
    return result`,
  },
  {
    id: 2,
    title: "Reverse a String",
    difficulty: "Easy",
    problem:
      "Write a function `reverse_string(s)` that returns the reversed version of the input string. Do **not** use slicing (`[::-1]`) or the built-in `reversed()` function.",
    signature: "def reverse_string(s):",
    starter: "def reverse_string(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "reverse_string('hello')", expected: "'olleh'" },
      { input: "reverse_string('Python')", expected: "'nohtyP'" },
      { input: "reverse_string('')", expected: "''" },
      { input: "reverse_string('a')", expected: "'a'" },
    ],
    answer: `def reverse_string(s):
    result = ''
    for char in s:
        result = char + result
    return result`,
  },
  {
    id: 3,
    title: "Find Maximum",
    difficulty: "Easy",
    problem:
      "Write a function `find_max(lst)` that returns the largest number in a list. Do **not** use the built-in `max()` function. You can assume the list is non-empty.",
    signature: "def find_max(lst):",
    starter: "def find_max(lst):\n    # Your code here\n    pass",
    testCases: [
      { input: "find_max([3, 1, 4, 1, 5, 9, 2, 6])", expected: "9" },
      { input: "find_max([-5, -2, -8, -1])", expected: "-1" },
      { input: "find_max([42])", expected: "42" },
    ],
    answer: `def find_max(lst):
    largest = lst[0]
    for num in lst[1:]:
        if num > largest:
            largest = num
    return largest`,
  },
  {
    id: 4,
    title: "Palindrome Check",
    difficulty: "Easy",
    problem:
      "Write a function `is_palindrome(s)` that returns `True` if the string is a palindrome (reads the same forwards and backwards), ignoring case and non-alphanumeric characters.",
    signature: "def is_palindrome(s):",
    starter: "def is_palindrome(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "is_palindrome('racecar')", expected: "True" },
      { input: "is_palindrome('A man, a plan, a canal: Panama')", expected: "True" },
      { input: "is_palindrome('hello')", expected: "False" },
      { input: "is_palindrome('')", expected: "True" },
    ],
    answer: `def is_palindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`,
  },
  {
    id: 5,
    title: "Fibonacci Sequence",
    difficulty: "Easy",
    problem:
      "Write a function `fibonacci(n)` that returns a list of the first `n` Fibonacci numbers. Start with `[0, 1]`. If `n` is 0 return `[]`, if 1 return `[0]`.",
    signature: "def fibonacci(n):",
    starter: "def fibonacci(n):\n    # Your code here\n    pass",
    testCases: [
      { input: "fibonacci(0)", expected: "[]" },
      { input: "fibonacci(1)", expected: "[0]" },
      { input: "fibonacci(7)", expected: "[0, 1, 1, 2, 3, 5, 8]" },
      { input: "fibonacci(10)", expected: "[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]" },
    ],
    answer: `def fibonacci(n):
    if n == 0:
        return []
    if n == 1:
        return [0]
    fibs = [0, 1]
    for i in range(2, n):
        fibs.append(fibs[-1] + fibs[-2])
    return fibs`,
  },
  {
    id: 6,
    title: "Count Vowels",
    difficulty: "Easy",
    problem:
      "Write a function `count_vowels(s)` that returns a dictionary with each vowel (a, e, i, o, u) as key and its count in the string as value. Ignore case. Only include vowels that appear at least once.",
    signature: "def count_vowels(s):",
    starter: "def count_vowels(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "count_vowels('hello world')", expected: "{'e': 1, 'o': 2}" },
      { input: "count_vowels('AEIOU')", expected: "{'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1}" },
      { input: "count_vowels('xyz')", expected: "{}" },
    ],
    answer: `def count_vowels(s):
    vowels = 'aeiou'
    counts = {}
    for c in s.lower():
        if c in vowels:
            counts[c] = counts.get(c, 0) + 1
    return counts`,
  },
  {
    id: 7,
    title: "Remove Duplicates",
    difficulty: "Easy",
    problem:
      "Write a function `remove_duplicates(lst)` that returns a new list with duplicates removed, preserving the **original order** of first appearance.",
    signature: "def remove_duplicates(lst):",
    starter: "def remove_duplicates(lst):\n    # Your code here\n    pass",
    testCases: [
      { input: "remove_duplicates([1, 2, 3, 2, 1, 4])", expected: "[1, 2, 3, 4]" },
      { input: "remove_duplicates([1, 1, 1])", expected: "[1]" },
      { input: "remove_duplicates([])", expected: "[]" },
      { input: "remove_duplicates(['a', 'b', 'a', 'c', 'b'])", expected: "['a', 'b', 'c']" },
    ],
    answer: `def remove_duplicates(lst):
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result`,
  },
  {
    id: 8,
    title: "Two Sum",
    difficulty: "Medium",
    problem:
      "Write a function `two_sum(nums, target)` that returns the indices of the two numbers that add up to `target`. Return them as a list `[i, j]` where `i < j`. Assume exactly one solution exists.",
    signature: "def two_sum(nums, target):",
    starter: "def two_sum(nums, target):\n    # Your code here\n    pass",
    testCases: [
      { input: "two_sum([2, 7, 11, 15], 9)", expected: "[0, 1]" },
      { input: "two_sum([3, 2, 4], 6)", expected: "[1, 2]" },
      { input: "two_sum([1, 5, 3, 7], 8)", expected: "[1, 2]" },
    ],
    answer: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i`,
  },
  {
    id: 9,
    title: "Flatten Nested List",
    difficulty: "Medium",
    problem:
      "Write a function `flatten(lst)` that takes an arbitrarily nested list and returns a single flat list of all elements in order.",
    signature: "def flatten(lst):",
    starter: "def flatten(lst):\n    # Your code here\n    pass",
    testCases: [
      { input: "flatten([1, [2, 3], [4, [5, 6]]])", expected: "[1, 2, 3, 4, 5, 6]" },
      { input: "flatten([[1], [[2]], [[[3]]]])", expected: "[1, 2, 3]" },
      { input: "flatten([1, 2, 3])", expected: "[1, 2, 3]" },
      { input: "flatten([])", expected: "[]" },
    ],
    answer: `def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result`,
  },
  {
    id: 10,
    title: "Group Anagrams",
    difficulty: "Medium",
    problem:
      "Write a function `group_anagrams(words)` that groups a list of strings into sublists of anagrams. Return the groups sorted by their first element, and each group sorted alphabetically.",
    signature: "def group_anagrams(words):",
    starter: "def group_anagrams(words):\n    # Your code here\n    pass",
    testCases: [
      { input: "group_anagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])", expected: "[['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]" },
      { input: "group_anagrams(['abc', 'cba', 'bac'])", expected: "[['abc', 'bac', 'cba']]" },
      { input: "group_anagrams(['a'])", expected: "[['a']]" },
    ],
    answer: `def group_anagrams(words):
    groups = {}
    for word in words:
        key = ''.join(sorted(word))
        groups.setdefault(key, []).append(word)
    result = [sorted(g) for g in groups.values()]
    result.sort(key=lambda g: g[0])
    return result`,
  },
  {
    id: 11,
    title: "Matrix Transpose",
    difficulty: "Medium",
    problem:
      "Write a function `transpose(matrix)` that returns the transpose of a 2D matrix (list of lists). Rows become columns and vice versa.",
    signature: "def transpose(matrix):",
    starter: "def transpose(matrix):\n    # Your code here\n    pass",
    testCases: [
      { input: "transpose([[1, 2, 3], [4, 5, 6]])", expected: "[[1, 4], [2, 5], [3, 6]]" },
      { input: "transpose([[1]])", expected: "[[1]]" },
      { input: "transpose([[1, 2], [3, 4], [5, 6]])", expected: "[[1, 3, 5], [2, 4, 6]]" },
    ],
    answer: `def transpose(matrix):
    return [list(row) for row in zip(*matrix)]`,
  },
  {
    id: 12,
    title: "Valid Parentheses",
    difficulty: "Medium",
    problem:
      "Write a function `is_valid(s)` that checks if a string of brackets `()[]{}` is valid. Every open bracket must be closed by the same type in the correct order.",
    signature: "def is_valid(s):",
    starter: "def is_valid(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "is_valid('()')", expected: "True" },
      { input: "is_valid('()[]{}')", expected: "True" },
      { input: "is_valid('(]')", expected: "False" },
      { input: "is_valid('([)]')", expected: "False" },
      { input: "is_valid('{[]}')", expected: "True" },
      { input: "is_valid('')", expected: "True" },
    ],
    answer: `def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif c in pairs:
            if not stack or stack[-1] != pairs[c]:
                return False
            stack.pop()
    return len(stack) == 0`,
  },
  {
    id: 13,
    title: "Caesar Cipher",
    difficulty: "Medium",
    problem:
      "Write a function `caesar_cipher(text, shift)` that encrypts text by shifting each letter by `shift` positions in the alphabet. Wrap around from z to a. Preserve case and leave non-letters unchanged.",
    signature: "def caesar_cipher(text, shift):",
    starter: "def caesar_cipher(text, shift):\n    # Your code here\n    pass",
    testCases: [
      { input: "caesar_cipher('abc', 3)", expected: "'def'" },
      { input: "caesar_cipher('xyz', 3)", expected: "'abc'" },
      { input: "caesar_cipher('Hello, World!', 13)", expected: "'Uryyb, Jbeyq!'" },
      { input: "caesar_cipher('abc', 0)", expected: "'abc'" },
    ],
    answer: `def caesar_cipher(text, shift):
    result = []
    for c in text:
        if c.isalpha():
            base = ord('A') if c.isupper() else ord('a')
            result.append(chr((ord(c) - base + shift) % 26 + base))
        else:
            result.append(c)
    return ''.join(result)`,
  },
  {
    id: 14,
    title: "Word Frequency Counter",
    difficulty: "Medium",
    problem:
      "Write a function `word_freq(text)` that returns a dictionary of word frequencies. Convert to lowercase and strip punctuation (keep only alphanumeric chars and spaces). Return words sorted by frequency (descending), then alphabetically for ties. Return as a list of `[word, count]` pairs.",
    signature: "def word_freq(text):",
    starter: "def word_freq(text):\n    # Your code here\n    pass",
    testCases: [
      { input: "word_freq('the cat and the dog and the fish')", expected: "[['the', 3], ['and', 2], ['cat', 1], ['dog', 1], ['fish', 1]]" },
      { input: "word_freq('Hello hello HELLO')", expected: "[['hello', 3]]" },
      { input: "word_freq('one')", expected: "[['one', 1]]" },
    ],
    answer: `def word_freq(text):
    cleaned = ''.join(c if c.isalnum() or c == ' ' else '' for c in text.lower())
    words = cleaned.split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    result = sorted(counts.items(), key=lambda x: (-x[1], x[0]))
    return [list(pair) for pair in result]`,
  },
  {
    id: 15,
    title: "Merge Sorted Lists",
    difficulty: "Medium",
    problem:
      "Write a function `merge_sorted(lst1, lst2)` that merges two sorted lists into a single sorted list. Do **not** use the built-in `sorted()` or `.sort()`.",
    signature: "def merge_sorted(lst1, lst2):",
    starter: "def merge_sorted(lst1, lst2):\n    # Your code here\n    pass",
    testCases: [
      { input: "merge_sorted([1, 3, 5], [2, 4, 6])", expected: "[1, 2, 3, 4, 5, 6]" },
      { input: "merge_sorted([1, 2, 3], [])", expected: "[1, 2, 3]" },
      { input: "merge_sorted([], [4, 5])", expected: "[4, 5]" },
      { input: "merge_sorted([1, 1], [1, 1])", expected: "[1, 1, 1, 1]" },
    ],
    answer: `def merge_sorted(lst1, lst2):
    result = []
    i = j = 0
    while i < len(lst1) and j < len(lst2):
        if lst1[i] <= lst2[j]:
            result.append(lst1[i])
            i += 1
        else:
            result.append(lst2[j])
            j += 1
    result.extend(lst1[i:])
    result.extend(lst2[j:])
    return result`,
  },
];

module.exports = pythonQuestions;
