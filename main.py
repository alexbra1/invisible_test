def check_string(s):
    if len(s) < 6:
        return False
    is_digit = False
    num_digits = 0
    for c in s:
        if c.isdigit():
            if is_digit:
                return False
            is_digit = True
            num_digits += 1
            if num_digits > 3:
                return False
        else:
            is_digit = False
    return True


from collections import defaultdict
import string


def count_frequency(s):
    freq = defaultdict(int)
    words = s.split()
    for word in words:
        word = word.lower()
        word = word.strip(string.punctuation)
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1
    return freq
