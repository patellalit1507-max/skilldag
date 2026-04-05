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

  // ── DE DSA: Arrays + Hashing ──────────────────────────────────────

  {
    id: 16,
    title: "DE: Two Sum",
    difficulty: "Medium",
    problem:
      "Write a function `two_sum(nums, target)` that returns the indices of the two numbers in `nums` that add up to `target`. Return as a list `[i, j]` where `i < j`. Assume exactly one solution exists.",
    signature: "def two_sum(nums, target):",
    starter: "def two_sum(nums, target):\n    # Your code here\n    pass",
    testCases: [
      { input: "two_sum([2, 7, 11, 15], 9)", expected: "[0, 1]" },
      { input: "two_sum([3, 2, 4], 6)", expected: "[1, 2]" },
      { input: "two_sum([3, 3], 6)", expected: "[0, 1]" },
    ],
    answer: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        comp = target - num
        if comp in seen:
            return [seen[comp], i]
        seen[num] = i`,
  },
  {
    id: 17,
    title: "DE: 3Sum",
    difficulty: "Hard",
    problem:
      "Write a function `three_sum(nums)` that returns all unique triplets `[a, b, c]` where `a + b + c == 0`. No duplicate triplets. Return sorted triplets, outer list sorted.",
    signature: "def three_sum(nums):",
    starter: "def three_sum(nums):\n    # Your code here\n    pass",
    testCases: [
      { input: "three_sum([-1, 0, 1, 2, -1, -4])", expected: "[[-1, -1, 2], [-1, 0, 1]]" },
      { input: "three_sum([0, 0, 0])", expected: "[[0, 0, 0]]" },
      { input: "three_sum([1, 2, -3, 4])", expected: "[[-3, 1, 2]]" },
    ],
    answer: `def three_sum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        lo, hi = i + 1, len(nums) - 1
        while lo < hi:
            s = nums[i] + nums[lo] + nums[hi]
            if s == 0:
                result.append([nums[i], nums[lo], nums[hi]])
                while lo < hi and nums[lo] == nums[lo + 1]:
                    lo += 1
                while lo < hi and nums[hi] == nums[hi - 1]:
                    hi -= 1
                lo += 1
                hi -= 1
            elif s < 0:
                lo += 1
            else:
                hi -= 1
    return result`,
  },
  {
    id: 18,
    title: "DE: Subarray Sum Equals K",
    difficulty: "Medium",
    problem:
      "Write a function `subarray_sum(nums, k)` that returns the total number of contiguous subarrays whose sum equals `k`.",
    signature: "def subarray_sum(nums, k):",
    starter: "def subarray_sum(nums, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "subarray_sum([1, 1, 1], 2)", expected: "2" },
      { input: "subarray_sum([1, 2, 3], 3)", expected: "2" },
      { input: "subarray_sum([1, -1, 0], 0)", expected: "3" },
    ],
    answer: `def subarray_sum(nums, k):
    count = 0
    prefix = 0
    seen = {0: 1}
    for num in nums:
        prefix += num
        if prefix - k in seen:
            count += seen[prefix - k]
        seen[prefix] = seen.get(prefix, 0) + 1
    return count`,
  },
  {
    id: 19,
    title: "DE: Longest Consecutive Sequence",
    difficulty: "Hard",
    problem:
      "Write a function `longest_consecutive(nums)` that returns the length of the longest consecutive elements sequence. Must run in O(n) time.",
    signature: "def longest_consecutive(nums):",
    starter: "def longest_consecutive(nums):\n    # Your code here\n    pass",
    testCases: [
      { input: "longest_consecutive([100, 4, 200, 1, 3, 2])", expected: "4" },
      { input: "longest_consecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])", expected: "9" },
      { input: "longest_consecutive([])", expected: "0" },
    ],
    answer: `def longest_consecutive(nums):
    num_set = set(nums)
    best = 0
    for n in num_set:
        if n - 1 not in num_set:
            cur = n
            streak = 1
            while cur + 1 in num_set:
                cur += 1
                streak += 1
            best = max(best, streak)
    return best`,
  },
  {
    id: 20,
    title: "DE: Top K Frequent Elements",
    difficulty: "Medium",
    problem:
      "Write a function `top_k_frequent(nums, k)` that returns the `k` most frequent elements. Return as a sorted list.",
    signature: "def top_k_frequent(nums, k):",
    starter: "def top_k_frequent(nums, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "top_k_frequent([1, 1, 1, 2, 2, 3], 2)", expected: "[1, 2]" },
      { input: "top_k_frequent([1], 1)", expected: "[1]" },
      { input: "top_k_frequent([4, 4, 5, 5, 5, 6], 1)", expected: "[5]" },
    ],
    answer: `def top_k_frequent(nums, k):
    freq = {}
    for n in nums:
        freq[n] = freq.get(n, 0) + 1
    buckets = [[] for _ in range(len(nums) + 1)]
    for num, count in freq.items():
        buckets[count].append(num)
    result = []
    for i in range(len(buckets) - 1, -1, -1):
        for num in buckets[i]:
            result.append(num)
            if len(result) == k:
                return sorted(result)
    return sorted(result)`,
  },
  {
    id: 21,
    title: "DE: Product of Array Except Self",
    difficulty: "Medium",
    problem:
      "Write a function `product_except_self(nums)` that returns an array where each element is the product of all other elements. Do **not** use division.",
    signature: "def product_except_self(nums):",
    starter: "def product_except_self(nums):\n    # Your code here\n    pass",
    testCases: [
      { input: "product_except_self([1, 2, 3, 4])", expected: "[24, 12, 8, 6]" },
      { input: "product_except_self([-1, 1, 0, -3, 3])", expected: "[0, 0, 9, 0, 0]" },
      { input: "product_except_self([2, 3])", expected: "[3, 2]" },
    ],
    answer: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result`,
  },
  {
    id: 22,
    title: "DE: Contains Duplicate II",
    difficulty: "Medium",
    problem:
      "Write a function `contains_nearby_duplicate(nums, k)` that returns `True` if there are two distinct indices `i` and `j` such that `nums[i] == nums[j]` and `abs(i - j) <= k`.",
    signature: "def contains_nearby_duplicate(nums, k):",
    starter: "def contains_nearby_duplicate(nums, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "contains_nearby_duplicate([1, 2, 3, 1], 3)", expected: "True" },
      { input: "contains_nearby_duplicate([1, 0, 1, 1], 1)", expected: "True" },
      { input: "contains_nearby_duplicate([1, 2, 3, 1, 2, 3], 2)", expected: "False" },
    ],
    answer: `def contains_nearby_duplicate(nums, k):
    seen = {}
    for i, num in enumerate(nums):
        if num in seen and i - seen[num] <= k:
            return True
        seen[num] = i
    return False`,
  },
  {
    id: 23,
    title: "DE: Intersection of Two Arrays II",
    difficulty: "Medium",
    problem:
      "Write a function `intersect(nums1, nums2)` that returns the intersection of two arrays (including duplicates). Return the result sorted.",
    signature: "def intersect(nums1, nums2):",
    starter: "def intersect(nums1, nums2):\n    # Your code here\n    pass",
    testCases: [
      { input: "intersect([1, 2, 2, 1], [2, 2])", expected: "[2, 2]" },
      { input: "intersect([4, 9, 5], [9, 4, 9, 8, 4])", expected: "[4, 9]" },
      { input: "intersect([1, 2], [3, 4])", expected: "[]" },
    ],
    answer: `def intersect(nums1, nums2):
    freq = {}
    for n in nums1:
        freq[n] = freq.get(n, 0) + 1
    result = []
    for n in nums2:
        if freq.get(n, 0) > 0:
            result.append(n)
            freq[n] -= 1
    return sorted(result)`,
  },
  {
    id: 24,
    title: "DE: Missing Number",
    difficulty: "Easy",
    problem:
      "Write a function `missing_number(nums)` that takes a list of `n` distinct numbers in the range `[0, n]` and returns the one missing number.",
    signature: "def missing_number(nums):",
    starter: "def missing_number(nums):\n    # Your code here\n    pass",
    testCases: [
      { input: "missing_number([3, 0, 1])", expected: "2" },
      { input: "missing_number([0, 1])", expected: "2" },
      { input: "missing_number([9,6,4,2,3,5,7,0,1])", expected: "8" },
    ],
    answer: `def missing_number(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)`,
  },
  {
    id: 25,
    title: "DE: Find All Duplicates in Array",
    difficulty: "Medium",
    problem:
      "Write a function `find_duplicates(nums)` where elements are in range `[1, n]`. Return all elements that appear **twice**, sorted.",
    signature: "def find_duplicates(nums):",
    starter: "def find_duplicates(nums):\n    # Your code here\n    pass",
    testCases: [
      { input: "find_duplicates([4, 3, 2, 7, 8, 2, 3, 1])", expected: "[2, 3]" },
      { input: "find_duplicates([1, 1, 2])", expected: "[1]" },
      { input: "find_duplicates([1])", expected: "[]" },
    ],
    answer: `def find_duplicates(nums):
    result = []
    for num in nums:
        idx = abs(num) - 1
        if nums[idx] < 0:
            result.append(abs(num))
        else:
            nums[idx] = -nums[idx]
    return sorted(result)`,
  },

  // ── DE DSA: Sliding Window ────────────────────────────────────────

  {
    id: 26,
    title: "DE: Longest Substring Without Repeating",
    difficulty: "Medium",
    problem:
      "Write a function `length_of_longest_substring(s)` that returns the length of the longest substring without repeating characters.",
    signature: "def length_of_longest_substring(s):",
    starter: "def length_of_longest_substring(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "length_of_longest_substring('abcabcbb')", expected: "3" },
      { input: "length_of_longest_substring('bbbbb')", expected: "1" },
      { input: "length_of_longest_substring('pwwkew')", expected: "3" },
      { input: "length_of_longest_substring('')", expected: "0" },
    ],
    answer: `def length_of_longest_substring(s):
    seen = {}
    left = best = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        best = max(best, right - left + 1)
    return best`,
  },
  {
    id: 27,
    title: "DE: Minimum Window Substring",
    difficulty: "Hard",
    problem:
      "Write a function `min_window(s, t)` that returns the minimum window substring of `s` that contains all characters in `t` (including duplicates). Return `''` if no such window exists.",
    signature: "def min_window(s, t):",
    starter: "def min_window(s, t):\n    # Your code here\n    pass",
    testCases: [
      { input: "min_window('ADOBECODEBANC', 'ABC')", expected: "'BANC'" },
      { input: "min_window('a', 'a')", expected: "'a'" },
      { input: "min_window('a', 'aa')", expected: "''" },
    ],
    answer: `def min_window(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    missing = len(t)
    left = 0
    start, end = 0, float('inf')
    for right, ch in enumerate(s):
        if need.get(ch, 0) > 0:
            missing -= 1
        need[ch] = need.get(ch, 0) - 1
        while missing == 0:
            if right - left < end - start:
                start, end = left, right
            need[s[left]] += 1
            if need[s[left]] > 0:
                missing += 1
            left += 1
    return '' if end == float('inf') else s[start:end + 1]`,
  },
  {
    id: 28,
    title: "DE: Sliding Window Maximum",
    difficulty: "Hard",
    problem:
      "Write a function `max_sliding_window(nums, k)` that returns a list of the maximum value in each sliding window of size `k`.",
    signature: "def max_sliding_window(nums, k):",
    starter: "def max_sliding_window(nums, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "max_sliding_window([1,3,-1,-3,5,3,6,7], 3)", expected: "[3, 3, 5, 5, 6, 7]" },
      { input: "max_sliding_window([1], 1)", expected: "[1]" },
      { input: "max_sliding_window([9, 11], 2)", expected: "[11]" },
    ],
    answer: `def max_sliding_window(nums, k):
    from collections import deque
    dq = deque()
    result = []
    for i, num in enumerate(nums):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
  },
  {
    id: 29,
    title: "DE: Permutation in String",
    difficulty: "Medium",
    problem:
      "Write a function `check_inclusion(s1, s2)` that returns `True` if any permutation of `s1` is a substring of `s2`.",
    signature: "def check_inclusion(s1, s2):",
    starter: "def check_inclusion(s1, s2):\n    # Your code here\n    pass",
    testCases: [
      { input: "check_inclusion('ab', 'eidbaooo')", expected: "True" },
      { input: "check_inclusion('ab', 'eidboaoo')", expected: "False" },
      { input: "check_inclusion('adc', 'dcda')", expected: "True" },
    ],
    answer: `def check_inclusion(s1, s2):
    if len(s1) > len(s2):
        return False
    freq = {}
    for c in s1:
        freq[c] = freq.get(c, 0) + 1
    window = {}
    for i in range(len(s1)):
        window[s2[i]] = window.get(s2[i], 0) + 1
    if window == freq:
        return True
    for i in range(len(s1), len(s2)):
        window[s2[i]] = window.get(s2[i], 0) + 1
        left = s2[i - len(s1)]
        window[left] -= 1
        if window[left] == 0:
            del window[left]
        if window == freq:
            return True
    return False`,
  },
  {
    id: 30,
    title: "DE: Maximum Average Subarray",
    difficulty: "Easy",
    problem:
      "Write a function `find_max_average(nums, k)` that returns the maximum average of a contiguous subarray of length `k`. Round to 5 decimal places.",
    signature: "def find_max_average(nums, k):",
    starter: "def find_max_average(nums, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "find_max_average([1,12,-5,-6,50,3], 4)", expected: "12.75" },
      { input: "find_max_average([5], 1)", expected: "5.0" },
      { input: "find_max_average([0, 4, 0, 3, 2], 1)", expected: "4.0" },
    ],
    answer: `def find_max_average(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        best = max(best, window)
    return round(best / k, 5)`,
  },

  // ── DE DSA: Intervals / Scheduling ────────────────────────────────

  {
    id: 31,
    title: "DE: Merge Intervals",
    difficulty: "Medium",
    problem:
      "Write a function `merge_intervals(intervals)` that merges all overlapping intervals and returns the result sorted by start.",
    signature: "def merge_intervals(intervals):",
    starter: "def merge_intervals(intervals):\n    # Your code here\n    pass",
    testCases: [
      { input: "merge_intervals([[1,3],[2,6],[8,10],[15,18]])", expected: "[[1, 6], [8, 10], [15, 18]]" },
      { input: "merge_intervals([[1,4],[4,5]])", expected: "[[1, 5]]" },
      { input: "merge_intervals([[1,4],[0,4]])", expected: "[[0, 4]]" },
    ],
    answer: `def merge_intervals(intervals):
    intervals.sort()
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged`,
  },
  {
    id: 32,
    title: "DE: Insert Interval",
    difficulty: "Medium",
    problem:
      "Write a function `insert_interval(intervals, new)` that inserts a new interval into a sorted list of non-overlapping intervals and merges if necessary.",
    signature: "def insert_interval(intervals, new):",
    starter: "def insert_interval(intervals, new):\n    # Your code here\n    pass",
    testCases: [
      { input: "insert_interval([[1,3],[6,9]], [2,5])", expected: "[[1, 5], [6, 9]]" },
      { input: "insert_interval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])", expected: "[[1, 2], [3, 10], [12, 16]]" },
      { input: "insert_interval([], [5,7])", expected: "[[5, 7]]" },
    ],
    answer: `def insert_interval(intervals, new):
    result = []
    i = 0
    while i < len(intervals) and intervals[i][1] < new[0]:
        result.append(intervals[i])
        i += 1
    while i < len(intervals) and intervals[i][0] <= new[1]:
        new[0] = min(new[0], intervals[i][0])
        new[1] = max(new[1], intervals[i][1])
        i += 1
    result.append(new)
    while i < len(intervals):
        result.append(intervals[i])
        i += 1
    return result`,
  },
  {
    id: 33,
    title: "DE: Non-overlapping Intervals",
    difficulty: "Medium",
    problem:
      "Write a function `erase_overlap(intervals)` that returns the minimum number of intervals to remove to make the rest non-overlapping.",
    signature: "def erase_overlap(intervals):",
    starter: "def erase_overlap(intervals):\n    # Your code here\n    pass",
    testCases: [
      { input: "erase_overlap([[1,2],[2,3],[3,4],[1,3]])", expected: "1" },
      { input: "erase_overlap([[1,2],[1,2],[1,2]])", expected: "2" },
      { input: "erase_overlap([[1,2],[2,3]])", expected: "0" },
    ],
    answer: `def erase_overlap(intervals):
    intervals.sort(key=lambda x: x[1])
    count = 0
    end = float('-inf')
    for s, e in intervals:
        if s >= end:
            end = e
        else:
            count += 1
    return count`,
  },
  {
    id: 34,
    title: "DE: Meeting Rooms II",
    difficulty: "Hard",
    problem:
      "Write a function `min_meeting_rooms(intervals)` that returns the minimum number of conference rooms required to hold all meetings.",
    signature: "def min_meeting_rooms(intervals):",
    starter: "def min_meeting_rooms(intervals):\n    # Your code here\n    pass",
    testCases: [
      { input: "min_meeting_rooms([[0,30],[5,10],[15,20]])", expected: "2" },
      { input: "min_meeting_rooms([[7,10],[2,4]])", expected: "1" },
      { input: "min_meeting_rooms([[1,5],[2,6],[3,7],[4,8]])", expected: "4" },
    ],
    answer: `def min_meeting_rooms(intervals):
    events = []
    for s, e in intervals:
        events.append((s, 1))
        events.append((e, -1))
    events.sort()
    rooms = max_rooms = 0
    for _, typ in events:
        rooms += typ
        max_rooms = max(max_rooms, rooms)
    return max_rooms`,
  },
  {
    id: 35,
    title: "DE: Employee Free Time",
    difficulty: "Hard",
    problem:
      "Write a function `employee_free_time(schedules)` where `schedules` is a list of lists of `[start, end]` intervals per employee. Return the list of **free time intervals** common to all employees, sorted.",
    signature: "def employee_free_time(schedules):",
    starter: "def employee_free_time(schedules):\n    # Your code here\n    pass",
    testCases: [
      { input: "employee_free_time([[[1,2],[5,6]],[[1,3]],[[4,10]]])", expected: "[[3, 4]]" },
      { input: "employee_free_time([[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]])", expected: "[[5, 6], [7, 9]]" },
      { input: "employee_free_time([[[1,2]],[[3,4]]])", expected: "[[2, 3]]" },
    ],
    answer: `def employee_free_time(schedules):
    all_intervals = []
    for emp in schedules:
        all_intervals.extend(emp)
    all_intervals.sort()
    merged = [all_intervals[0][:]]
    for s, e in all_intervals[1:]:
        if s <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], e)
        else:
            merged.append([s, e])
    free = []
    for i in range(1, len(merged)):
        free.append([merged[i - 1][1], merged[i][0]])
    return free`,
  },

  // ── DE DSA: Heap / Priority Queue ─────────────────────────────────

  {
    id: 36,
    title: "DE: Kth Largest Element",
    difficulty: "Medium",
    problem:
      "Write a function `find_kth_largest(nums, k)` that returns the kth largest element in the array.",
    signature: "def find_kth_largest(nums, k):",
    starter: "def find_kth_largest(nums, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "find_kth_largest([3,2,1,5,6,4], 2)", expected: "5" },
      { input: "find_kth_largest([3,2,3,1,2,4,5,5,6], 4)", expected: "4" },
      { input: "find_kth_largest([1], 1)", expected: "1" },
    ],
    answer: `def find_kth_largest(nums, k):
    import heapq
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]`,
  },
  {
    id: 37,
    title: "DE: Top K Frequent Words",
    difficulty: "Medium",
    problem:
      "Write a function `top_k_words(words, k)` that returns the `k` most frequent words sorted by frequency (desc), then alphabetically.",
    signature: "def top_k_words(words, k):",
    starter: "def top_k_words(words, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "top_k_words(['i','love','leetcode','i','love','coding'], 2)", expected: "['i', 'love']" },
      { input: "top_k_words(['the','day','is','sunny','the','the','the','sunny','is','is'], 4)", expected: "['the', 'is', 'sunny', 'day']" },
      { input: "top_k_words(['a','b','c'], 3)", expected: "['a', 'b', 'c']" },
    ],
    answer: `def top_k_words(words, k):
    freq = {}
    for w in words:
        freq[w] = freq.get(w, 0) + 1
    items = list(freq.items())
    items.sort(key=lambda x: (-x[1], x[0]))
    return [w for w, _ in items[:k]]`,
  },
  {
    id: 38,
    title: "DE: Find Median from Data Stream",
    difficulty: "Hard",
    problem:
      "Write a class `MedianFinder` with methods `add_num(num)` and `find_median()`. The function `run_median(operations)` takes a list of `('add', num)` or `('median',)` tuples and returns a list of median results (only for 'median' ops). Return floats.",
    signature: "def run_median(operations):",
    starter: "def run_median(operations):\n    # Your code here\n    pass",
    testCases: [
      { input: "run_median([('add',1),('add',2),('median',),('add',3),('median',)])", expected: "[1.5, 2.0]" },
      { input: "run_median([('add',5),('median',),('add',3),('median',)])", expected: "[5.0, 4.0]" },
      { input: "run_median([('add',1),('add',2),('add',3),('add',4),('median',)])", expected: "[2.5]" },
    ],
    answer: `def run_median(operations):
    import heapq
    lo = []  # max-heap (negated)
    hi = []  # min-heap
    results = []
    for op in operations:
        if op[0] == 'add':
            num = op[1]
            heapq.heappush(lo, -num)
            heapq.heappush(hi, -heapq.heappop(lo))
            if len(hi) > len(lo):
                heapq.heappush(lo, -heapq.heappop(hi))
        else:
            if len(lo) > len(hi):
                results.append(float(-lo[0]))
            else:
                results.append((-lo[0] + hi[0]) / 2.0)
    return results`,
  },
  {
    id: 39,
    title: "DE: Merge K Sorted Lists",
    difficulty: "Hard",
    problem:
      "Write a function `merge_k_sorted(lists)` that merges `k` sorted lists into one sorted list.",
    signature: "def merge_k_sorted(lists):",
    starter: "def merge_k_sorted(lists):\n    # Your code here\n    pass",
    testCases: [
      { input: "merge_k_sorted([[1,4,5],[1,3,4],[2,6]])", expected: "[1, 1, 2, 3, 4, 4, 5, 6]" },
      { input: "merge_k_sorted([[],[1]])", expected: "[1]" },
      { input: "merge_k_sorted([[1],[2],[3]])", expected: "[1, 2, 3]" },
    ],
    answer: `def merge_k_sorted(lists):
    import heapq
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
    result = []
    while heap:
        val, li, idx = heapq.heappop(heap)
        result.append(val)
        if idx + 1 < len(lists[li]):
            heapq.heappush(heap, (lists[li][idx + 1], li, idx + 1))
    return result`,
  },
  {
    id: 40,
    title: "DE: Task Scheduler",
    difficulty: "Medium",
    problem:
      "Write a function `least_interval(tasks, n)` that returns the minimum intervals the CPU needs to finish all tasks, where identical tasks must be separated by at least `n` intervals.",
    signature: "def least_interval(tasks, n):",
    starter: "def least_interval(tasks, n):\n    # Your code here\n    pass",
    testCases: [
      { input: "least_interval(['A','A','A','B','B','B'], 2)", expected: "8" },
      { input: "least_interval(['A','A','A','B','B','B'], 0)", expected: "6" },
      { input: "least_interval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2)", expected: "16" },
    ],
    answer: `def least_interval(tasks, n):
    freq = {}
    for t in tasks:
        freq[t] = freq.get(t, 0) + 1
    max_freq = max(freq.values())
    max_count = sum(1 for v in freq.values() if v == max_freq)
    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)`,
  },

  // ── DE DSA: Binary Search ─────────────────────────────────────────

  {
    id: 41,
    title: "DE: Search in Rotated Sorted Array",
    difficulty: "Medium",
    problem:
      "Write a function `search_rotated(nums, target)` that searches for `target` in a rotated sorted array. Return its index or `-1`.",
    signature: "def search_rotated(nums, target):",
    starter: "def search_rotated(nums, target):\n    # Your code here\n    pass",
    testCases: [
      { input: "search_rotated([4,5,6,7,0,1,2], 0)", expected: "4" },
      { input: "search_rotated([4,5,6,7,0,1,2], 3)", expected: "-1" },
      { input: "search_rotated([1], 0)", expected: "-1" },
    ],
    answer: `def search_rotated(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1`,
  },
  {
    id: 42,
    title: "DE: Find First and Last Position",
    difficulty: "Medium",
    problem:
      "Write a function `search_range(nums, target)` that finds the starting and ending position of `target` in a sorted array. Return `[-1, -1]` if not found.",
    signature: "def search_range(nums, target):",
    starter: "def search_range(nums, target):\n    # Your code here\n    pass",
    testCases: [
      { input: "search_range([5,7,7,8,8,10], 8)", expected: "[3, 4]" },
      { input: "search_range([5,7,7,8,8,10], 6)", expected: "[-1, -1]" },
      { input: "search_range([], 0)", expected: "[-1, -1]" },
    ],
    answer: `def search_range(nums, target):
    def bisect(find_left):
        lo, hi, idx = 0, len(nums) - 1, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == target:
                idx = mid
                if find_left:
                    hi = mid - 1
                else:
                    lo = mid + 1
            elif nums[mid] < target:
                lo = mid + 1
            else:
                hi = mid - 1
        return idx
    return [bisect(True), bisect(False)]`,
  },
  {
    id: 43,
    title: "DE: Median of Two Sorted Arrays",
    difficulty: "Hard",
    problem:
      "Write a function `find_median_sorted(nums1, nums2)` that returns the median of two sorted arrays. The overall run time should be O(log(m+n)).",
    signature: "def find_median_sorted(nums1, nums2):",
    starter: "def find_median_sorted(nums1, nums2):\n    # Your code here\n    pass",
    testCases: [
      { input: "find_median_sorted([1, 3], [2])", expected: "2.0" },
      { input: "find_median_sorted([1, 2], [3, 4])", expected: "2.5" },
      { input: "find_median_sorted([0, 0], [0, 0])", expected: "0.0" },
    ],
    answer: `def find_median_sorted(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    lo, hi = 0, m
    while lo <= hi:
        i = (lo + hi) // 2
        j = (m + n + 1) // 2 - i
        left1 = nums1[i - 1] if i > 0 else float('-inf')
        right1 = nums1[i] if i < m else float('inf')
        left2 = nums2[j - 1] if j > 0 else float('-inf')
        right2 = nums2[j] if j < n else float('inf')
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2 == 0:
                return (max(left1, left2) + min(right1, right2)) / 2.0
            return float(max(left1, left2))
        elif left1 > right2:
            hi = i - 1
        else:
            lo = i + 1`,
  },
  {
    id: 44,
    title: "DE: Kth Smallest in Sorted Matrix",
    difficulty: "Hard",
    problem:
      "Write a function `kth_smallest_matrix(matrix, k)` that returns the kth smallest element in a row-sorted and column-sorted matrix.",
    signature: "def kth_smallest_matrix(matrix, k):",
    starter: "def kth_smallest_matrix(matrix, k):\n    # Your code here\n    pass",
    testCases: [
      { input: "kth_smallest_matrix([[1,5,9],[10,11,13],[12,13,15]], 8)", expected: "13" },
      { input: "kth_smallest_matrix([[-5]], 1)", expected: "-5" },
      { input: "kth_smallest_matrix([[1,2],[1,3]], 2)", expected: "1" },
    ],
    answer: `def kth_smallest_matrix(matrix, k):
    import heapq
    n = len(matrix)
    heap = [(matrix[i][0], i, 0) for i in range(n)]
    heapq.heapify(heap)
    for _ in range(k):
        val, r, c = heapq.heappop(heap)
        if c + 1 < n:
            heapq.heappush(heap, (matrix[r][c + 1], r, c + 1))
    return val`,
  },
  {
    id: 45,
    title: "DE: Capacity to Ship Packages",
    difficulty: "Medium",
    problem:
      "Write a function `ship_within_days(weights, days)` that returns the minimum weight capacity of a ship to ship all packages within `days` days (packages must stay in order).",
    signature: "def ship_within_days(weights, days):",
    starter: "def ship_within_days(weights, days):\n    # Your code here\n    pass",
    testCases: [
      { input: "ship_within_days([1,2,3,4,5,6,7,8,9,10], 5)", expected: "15" },
      { input: "ship_within_days([3,2,2,4,1,4], 3)", expected: "6" },
      { input: "ship_within_days([1,2,3,1,1], 4)", expected: "3" },
    ],
    answer: `def ship_within_days(weights, days):
    def can_ship(cap):
        d, cur = 1, 0
        for w in weights:
            if cur + w > cap:
                d += 1
                cur = 0
            cur += w
        return d <= days
    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_ship(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
  },

  // ── DE DSA: Graphs ────────────────────────────────────────────────

  {
    id: 46,
    title: "DE: Number of Islands",
    difficulty: "Medium",
    problem:
      "Write a function `num_islands(grid)` that returns the number of islands in a 2D grid of `'1'`s (land) and `'0'`s (water).",
    signature: "def num_islands(grid):",
    starter: "def num_islands(grid):\n    # Your code here\n    pass",
    testCases: [
      { input: "num_islands([['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']])", expected: "3" },
      { input: "num_islands([['1','1','1'],['0','1','0'],['1','1','1']])", expected: "1" },
      { input: "num_islands([['0','0'],['0','0']])", expected: "0" },
    ],
    answer: `def num_islands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,
  },
  {
    id: 47,
    title: "DE: Course Schedule (Topological Sort)",
    difficulty: "Medium",
    problem:
      "Write a function `can_finish(num_courses, prerequisites)` that returns `True` if you can finish all courses given prerequisite pairs `[a, b]` meaning b must be taken before a.",
    signature: "def can_finish(num_courses, prerequisites):",
    starter: "def can_finish(num_courses, prerequisites):\n    # Your code here\n    pass",
    testCases: [
      { input: "can_finish(2, [[1,0]])", expected: "True" },
      { input: "can_finish(2, [[1,0],[0,1]])", expected: "False" },
      { input: "can_finish(4, [[1,0],[2,1],[3,2]])", expected: "True" },
    ],
    answer: `def can_finish(num_courses, prerequisites):
    from collections import deque
    graph = [[] for _ in range(num_courses)]
    indegree = [0] * num_courses
    for a, b in prerequisites:
        graph[b].append(a)
        indegree[a] += 1
    queue = deque([i for i in range(num_courses) if indegree[i] == 0])
    count = 0
    while queue:
        node = queue.popleft()
        count += 1
        for nei in graph[node]:
            indegree[nei] -= 1
            if indegree[nei] == 0:
                queue.append(nei)
    return count == num_courses`,
  },
  {
    id: 48,
    title: "DE: Course Schedule II",
    difficulty: "Medium",
    problem:
      "Write a function `find_order(num_courses, prerequisites)` that returns a valid course ordering. Return `[]` if impossible.",
    signature: "def find_order(num_courses, prerequisites):",
    starter: "def find_order(num_courses, prerequisites):\n    # Your code here\n    pass",
    testCases: [
      { input: "find_order(4, [[1,0],[2,0],[3,1],[3,2]])", expected: "[0, 1, 2, 3]" },
      { input: "find_order(2, [[1,0]])", expected: "[0, 1]" },
      { input: "find_order(2, [[0,1],[1,0]])", expected: "[]" },
    ],
    answer: `def find_order(num_courses, prerequisites):
    from collections import deque
    graph = [[] for _ in range(num_courses)]
    indegree = [0] * num_courses
    for a, b in prerequisites:
        graph[b].append(a)
        indegree[a] += 1
    queue = deque([i for i in range(num_courses) if indegree[i] == 0])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for nei in graph[node]:
            indegree[nei] -= 1
            if indegree[nei] == 0:
                queue.append(nei)
    return order if len(order) == num_courses else []`,
  },
  {
    id: 49,
    title: "DE: Clone Graph",
    difficulty: "Medium",
    problem:
      "Write a function `clone_graph(adj_list)` that deep-copies a graph given as an adjacency list (dict of node -> list of neighbors). Return the cloned adjacency list sorted by keys.",
    signature: "def clone_graph(adj_list):",
    starter: "def clone_graph(adj_list):\n    # Your code here\n    pass",
    testCases: [
      { input: "clone_graph({1: [2, 4], 2: [1, 3], 3: [2, 4], 4: [1, 3]})", expected: "{1: [2, 4], 2: [1, 3], 3: [2, 4], 4: [1, 3]}" },
      { input: "clone_graph({1: []})", expected: "{1: []}" },
      { input: "clone_graph({})", expected: "{}" },
    ],
    answer: `def clone_graph(adj_list):
    return {k: list(v) for k, v in sorted(adj_list.items())}`,
  },
  {
    id: 50,
    title: "DE: Pacific Atlantic Water Flow",
    difficulty: "Hard",
    problem:
      "Write a function `pacific_atlantic(heights)` that returns a sorted list of `[r, c]` coordinates where water can flow to both Pacific (top/left edges) and Atlantic (bottom/right edges) oceans.",
    signature: "def pacific_atlantic(heights):",
    starter: "def pacific_atlantic(heights):\n    # Your code here\n    pass",
    testCases: [
      { input: "pacific_atlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])", expected: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]" },
      { input: "pacific_atlantic([[1]])", expected: "[[0, 0]]" },
    ],
    answer: `def pacific_atlantic(heights):
    if not heights:
        return []
    rows, cols = len(heights), len(heights[0])
    pac, atl = set(), set()
    def dfs(r, c, visit, prev):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if (r, c) in visit or heights[r][c] < prev:
            return
        visit.add((r, c))
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            dfs(r + dr, c + dc, visit, heights[r][c])
    for c in range(cols):
        dfs(0, c, pac, 0)
        dfs(rows - 1, c, atl, 0)
    for r in range(rows):
        dfs(r, 0, pac, 0)
        dfs(r, cols - 1, atl, 0)
    return sorted([[r, c] for r, c in pac & atl])`,
  },

  // ── DE DSA: Trees ─────────────────────────────────────────────────

  {
    id: 51,
    title: "DE: Lowest Common Ancestor",
    difficulty: "Medium",
    problem:
      "Write a function `lca(tree, p, q)` where `tree` is a list representing a BST (as sorted array of values). Return the lowest common ancestor value of nodes `p` and `q`. Assume both exist.",
    signature: "def lca(tree, p, q):",
    starter: "def lca(tree, p, q):\n    # Your code here\n    pass",
    testCases: [
      { input: "lca([2,3,4,5,6,7,8], 2, 4)", expected: "3" },
      { input: "lca([2,3,4,5,6,7,8], 2, 8)", expected: "5" },
      { input: "lca([2,3,4,5,6,7,8], 6, 8)", expected: "7" },
    ],
    answer: `def lca(tree, p, q):
    # Build BST from sorted array, then find LCA
    def build(lo, hi):
        if lo > hi:
            return None
        mid = (lo + hi) // 2
        return (tree[mid], build(lo, mid - 1), build(mid + 1, hi))
    def find_lca(node, p, q):
        if not node:
            return None
        val = node[0]
        if p < val and q < val:
            return find_lca(node[1], p, q)
        if p > val and q > val:
            return find_lca(node[2], p, q)
        return val
    root = build(0, len(tree) - 1)
    return find_lca(root, p, q)`,
  },
  {
    id: 52,
    title: "DE: Binary Tree Level Order Traversal",
    difficulty: "Medium",
    problem:
      "Write a function `level_order(tree)` where `tree` is a list like `[3,9,20,None,None,15,7]` (level-order). Return a list of lists, each containing values at that level (skip None).",
    signature: "def level_order(tree):",
    starter: "def level_order(tree):\n    # Your code here\n    pass",
    testCases: [
      { input: "level_order([3,9,20,None,None,15,7])", expected: "[[3], [9, 20], [15, 7]]" },
      { input: "level_order([1])", expected: "[[1]]" },
      { input: "level_order([])", expected: "[]" },
    ],
    answer: `def level_order(tree):
    if not tree:
        return []
    from collections import deque
    result = []
    queue = deque([0])
    while queue:
        level = []
        for _ in range(len(queue)):
            idx = queue.popleft()
            if idx < len(tree) and tree[idx] is not None:
                level.append(tree[idx])
                queue.append(2 * idx + 1)
                queue.append(2 * idx + 2)
        if level:
            result.append(level)
    return result`,
  },
  {
    id: 53,
    title: "DE: Validate BST",
    difficulty: "Medium",
    problem:
      "Write a function `is_valid_bst(tree)` where `tree` is a list in level-order like `[5,1,7,None,None,4,8]`. Return `True` if it's a valid BST. `None` means no node.",
    signature: "def is_valid_bst(tree):",
    starter: "def is_valid_bst(tree):\n    # Your code here\n    pass",
    testCases: [
      { input: "is_valid_bst([2, 1, 3])", expected: "True" },
      { input: "is_valid_bst([5, 1, 4, None, None, 3, 6])", expected: "False" },
      { input: "is_valid_bst([1])", expected: "True" },
    ],
    answer: `def is_valid_bst(tree):
    def validate(idx, lo, hi):
        if idx >= len(tree) or tree[idx] is None:
            return True
        val = tree[idx]
        if val <= lo or val >= hi:
            return False
        return validate(2 * idx + 1, lo, val) and validate(2 * idx + 2, val, hi)
    if not tree:
        return True
    return validate(0, float('-inf'), float('inf'))`,
  },
  {
    id: 54,
    title: "DE: Serialize & Deserialize Binary Tree",
    difficulty: "Hard",
    problem:
      "Write functions inside `serialize_deserialize(tree)` that serializes a list-based tree `[1,2,3,None,None,4,5]` to a string and deserializes it back. Return the deserialized tree (same format as input, trimmed of trailing Nones).",
    signature: "def serialize_deserialize(tree):",
    starter: "def serialize_deserialize(tree):\n    # Your code here\n    pass",
    testCases: [
      { input: "serialize_deserialize([1, 2, 3, None, None, 4, 5])", expected: "[1, 2, 3, None, None, 4, 5]" },
      { input: "serialize_deserialize([])", expected: "[]" },
      { input: "serialize_deserialize([1])", expected: "[1]" },
    ],
    answer: `def serialize_deserialize(tree):
    # Serialize
    s = ','.join(['N' if v is None else str(v) for v in tree]) if tree else ''
    # Deserialize
    if not s:
        return []
    parts = s.split(',')
    result = [None if p == 'N' else int(p) for p in parts]
    # Trim trailing Nones
    while result and result[-1] is None:
        result.pop()
    return result`,
  },
  {
    id: 55,
    title: "DE: Diameter of Binary Tree",
    difficulty: "Easy",
    problem:
      "Write a function `diameter(tree)` where `tree` is a list in level-order like `[1,2,3,4,5]`. Return the diameter (longest path between any two nodes, measured in edges).",
    signature: "def diameter(tree):",
    starter: "def diameter(tree):\n    # Your code here\n    pass",
    testCases: [
      { input: "diameter([1, 2, 3, 4, 5])", expected: "3" },
      { input: "diameter([1, 2])", expected: "1" },
      { input: "diameter([1])", expected: "0" },
    ],
    answer: `def diameter(tree):
    best = 0
    def depth(idx):
        nonlocal best
        if idx >= len(tree) or tree[idx] is None:
            return 0
        l = depth(2 * idx + 1)
        r = depth(2 * idx + 2)
        best = max(best, l + r)
        return 1 + max(l, r)
    depth(0)
    return best`,
  },

  // ── DE DSA: Strings / Data Cleaning ───────────────────────────────

  {
    id: 56,
    title: "DE: Group Anagrams",
    difficulty: "Medium",
    problem:
      "Write a function `group_anagrams(strs)` that groups anagrams together. Return a sorted list of sorted groups.",
    signature: "def group_anagrams(strs):",
    starter: "def group_anagrams(strs):\n    # Your code here\n    pass",
    testCases: [
      { input: "group_anagrams(['eat','tea','tan','ate','nat','bat'])", expected: "[['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]" },
      { input: "group_anagrams([''])", expected: "[['']]" },
      { input: "group_anagrams(['a'])", expected: "[['a']]" },
    ],
    answer: `def group_anagrams(strs):
    groups = {}
    for s in strs:
        key = ''.join(sorted(s))
        groups.setdefault(key, []).append(s)
    return sorted([sorted(g) for g in groups.values()])`,
  },
  {
    id: 57,
    title: "DE: Valid Anagram",
    difficulty: "Easy",
    problem:
      "Write a function `is_anagram(s, t)` that returns `True` if `t` is an anagram of `s`.",
    signature: "def is_anagram(s, t):",
    starter: "def is_anagram(s, t):\n    # Your code here\n    pass",
    testCases: [
      { input: "is_anagram('anagram', 'nagaram')", expected: "True" },
      { input: "is_anagram('rat', 'car')", expected: "False" },
      { input: "is_anagram('', '')", expected: "True" },
    ],
    answer: `def is_anagram(s, t):
    if len(s) != len(t):
        return False
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    for c in t:
        freq[c] = freq.get(c, 0) - 1
        if freq[c] < 0:
            return False
    return True`,
  },
  {
    id: 58,
    title: "DE: Longest Palindromic Substring",
    difficulty: "Hard",
    problem:
      "Write a function `longest_palindrome(s)` that returns the longest palindromic substring. If there are ties, return the first one found.",
    signature: "def longest_palindrome(s):",
    starter: "def longest_palindrome(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "longest_palindrome('babad')", expected: "'bab'" },
      { input: "longest_palindrome('cbbd')", expected: "'bb'" },
      { input: "longest_palindrome('a')", expected: "'a'" },
    ],
    answer: `def longest_palindrome(s):
    res = ''
    for i in range(len(s)):
        for l, r in [(i, i), (i, i + 1)]:
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if r - l + 1 > len(res):
                    res = s[l:r + 1]
                l -= 1
                r += 1
    return res`,
  },
  {
    id: 59,
    title: "DE: String Compression",
    difficulty: "Easy",
    problem:
      "Write a function `compress(s)` that compresses a string using character counts. `'aabcccccaaa'` becomes `'a2b1c5a3'`. If compressed is not shorter, return original.",
    signature: "def compress(s):",
    starter: "def compress(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "compress('aabcccccaaa')", expected: "'a2b1c5a3'" },
      { input: "compress('abc')", expected: "'abc'" },
      { input: "compress('aaa')", expected: "'a3'" },
    ],
    answer: `def compress(s):
    if not s:
        return s
    result = []
    count = 1
    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            result.append(s[i - 1] + str(count))
            count = 1
    result.append(s[-1] + str(count))
    compressed = ''.join(result)
    return compressed if len(compressed) < len(s) else s`,
  },
  {
    id: 60,
    title: "DE: Encode and Decode Strings",
    difficulty: "Medium",
    problem:
      "Write a function `encode_decode(strs)` that encodes a list of strings into a single string and decodes it back. Return the decoded list (should match input).",
    signature: "def encode_decode(strs):",
    starter: "def encode_decode(strs):\n    # Your code here\n    pass",
    testCases: [
      { input: "encode_decode(['hello','world'])", expected: "['hello', 'world']" },
      { input: "encode_decode([''])", expected: "['']" },
      { input: "encode_decode(['we','say',':','yes'])", expected: "['we', 'say', ':', 'yes']" },
    ],
    answer: `def encode_decode(strs):
    # Encode: length + '#' + string
    encoded = ''.join(str(len(s)) + '#' + s for s in strs)
    # Decode
    result = []
    i = 0
    while i < len(encoded):
        j = encoded.index('#', i)
        length = int(encoded[i:j])
        result.append(encoded[j + 1:j + 1 + length])
        i = j + 1 + length
    return result`,
  },

  // ── DE DSA: Misc / Logic Heavy ────────────────────────────────────

  {
    id: 61,
    title: "DE: LRU Cache",
    difficulty: "Hard",
    problem:
      "Implement an LRU cache. Write a function `run_lru(capacity, operations)` where operations are `('get', key)` or `('put', key, value)`. Return a list of results for `get` operations (-1 if not found).",
    signature: "def run_lru(capacity, operations):",
    starter: "def run_lru(capacity, operations):\n    # Your code here\n    pass",
    testCases: [
      { input: "run_lru(2, [('put',1,1),('put',2,2),('get',1),('put',3,3),('get',2),('put',4,4),('get',1),('get',3),('get',4)])", expected: "[1, -1, -1, 3, 4]" },
      { input: "run_lru(1, [('put',1,1),('get',1),('put',2,2),('get',1),('get',2)])", expected: "[1, -1, 2]" },
    ],
    answer: `def run_lru(capacity, operations):
    from collections import OrderedDict
    cache = OrderedDict()
    results = []
    for op in operations:
        if op[0] == 'get':
            key = op[1]
            if key in cache:
                cache.move_to_end(key)
                results.append(cache[key])
            else:
                results.append(-1)
        else:
            key, val = op[1], op[2]
            if key in cache:
                cache.move_to_end(key)
            cache[key] = val
            if len(cache) > capacity:
                cache.popitem(last=False)
    return results`,
  },
  {
    id: 62,
    title: "DE: Design Hit Counter",
    difficulty: "Medium",
    problem:
      "Write a function `hit_counter(operations)` where ops are `('hit', timestamp)` or `('count', timestamp)`. Count returns hits in the past 300 seconds (inclusive). Return list of count results.",
    signature: "def hit_counter(operations):",
    starter: "def hit_counter(operations):\n    # Your code here\n    pass",
    testCases: [
      { input: "hit_counter([('hit',1),('hit',2),('hit',3),('count',4),('hit',300),('count',300),('count',301)])", expected: "[3, 4, 3]" },
      { input: "hit_counter([('hit',1),('count',300),('count',301)])", expected: "[1, 0]" },
    ],
    answer: `def hit_counter(operations):
    from collections import deque
    hits = deque()
    results = []
    for op in operations:
        if op[0] == 'hit':
            hits.append(op[1])
        else:
            ts = op[1]
            while hits and hits[0] <= ts - 300:
                hits.popleft()
            results.append(len(hits))
    return results`,
  },
  {
    id: 63,
    title: "DE: Random Pick with Weight",
    difficulty: "Medium",
    problem:
      "Write a function `pick_index(weights, picks)` where `picks` is a list of float values in [0, 1). For each pick value, return the index that would be selected in a weighted random pick. Return list of indices.",
    signature: "def pick_index(weights, picks):",
    starter: "def pick_index(weights, picks):\n    # Your code here\n    pass",
    testCases: [
      { input: "pick_index([1, 3], [0.0, 0.24, 0.25, 0.99])", expected: "[0, 0, 1, 1]" },
      { input: "pick_index([1, 1, 1], [0.0, 0.33, 0.34, 0.99])", expected: "[0, 0, 1, 2]" },
    ],
    answer: `def pick_index(weights, picks):
    prefix = []
    total = 0
    for w in weights:
        total += w
        prefix.append(total)
    results = []
    for p in picks:
        target = p * total
        lo, hi = 0, len(prefix) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if prefix[mid] <= target:
                lo = mid + 1
            else:
                hi = mid
        results.append(lo)
    return results`,
  },
  {
    id: 64,
    title: "DE: Find Duplicate Files",
    difficulty: "Medium",
    problem:
      "Write a function `find_duplicate(paths)` where each path is `'root/d file1(content1) file2(content2)'`. Return groups of duplicate file paths (same content). Return sorted groups, sorted internally.",
    signature: "def find_duplicate(paths):",
    starter: "def find_duplicate(paths):\n    # Your code here\n    pass",
    testCases: [
      { input: "find_duplicate(['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)'])", expected: "[['root/a/1.txt', 'root/c/3.txt'], ['root/a/2.txt', 'root/c/d/4.txt']]" },
      { input: "find_duplicate(['root/a 1.txt(abc)'])", expected: "[]" },
    ],
    answer: `def find_duplicate(paths):
    content_map = {}
    for path in paths:
        parts = path.split()
        root = parts[0]
        for file_info in parts[1:]:
            paren = file_info.index('(')
            fname = file_info[:paren]
            content = file_info[paren + 1:-1]
            full_path = root + '/' + fname
            content_map.setdefault(content, []).append(full_path)
    result = [sorted(files) for files in content_map.values() if len(files) > 1]
    return sorted(result)`,
  },
  {
    id: 65,
    title: "DE: Spiral Matrix",
    difficulty: "Medium",
    problem:
      "Write a function `spiral_order(matrix)` that returns all elements of the matrix in spiral order.",
    signature: "def spiral_order(matrix):",
    starter: "def spiral_order(matrix):\n    # Your code here\n    pass",
    testCases: [
      { input: "spiral_order([[1,2,3],[4,5,6],[7,8,9]])", expected: "[1, 2, 3, 6, 9, 8, 7, 4, 5]" },
      { input: "spiral_order([[1,2,3,4],[5,6,7,8],[9,10,11,12]])", expected: "[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]" },
      { input: "spiral_order([[1]])", expected: "[1]" },
    ],
    answer: `def spiral_order(matrix):
    result = []
    while matrix:
        result.extend(matrix.pop(0))
        if matrix and matrix[0]:
            for row in matrix:
                result.append(row.pop())
        if matrix:
            result.extend(matrix.pop()[::-1])
        if matrix and matrix[0]:
            for row in matrix[::-1]:
                result.append(row.pop(0))
    return result`,
  },
];

module.exports = pythonQuestions;
