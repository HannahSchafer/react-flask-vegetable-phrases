import re


def clean_string(string):
  """removes all non alphanumeric chars from a string"""
  return re.sub('[^\s\w]+', '', string).lower().strip().replace('_','')

def cache_key(string):
  """removes all non alphanumeric chars from a string"""
  return clean_string(string).replace(' ','_')

def pair_count(string):
  """counts occurences of consecutive word pairs"""
  pair_count = {}
  i = 0
  j = 1
  
  word_list = clean_string(string).split()
  
  while j < len(word_list):
    word_1 = word_list[i].lower()
    word_2 = word_list[j].lower()    
    pair = str(tuple(sorted((word_1 , word_2)))) 

    pair_count[pair] = pair_count.get(pair, 0) + 1

    i += 1
    j += 1

  return pair_count
