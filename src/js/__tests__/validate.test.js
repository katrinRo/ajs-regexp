import Validator from '../validate';

test.each([
  'katrin', 'masli666h', 'vi_lon', 'val-er', 'pablo_es_k', 'mal10-_ol',
])(('correct names'), (data) => {
  expect(Validator.validateUsername(data)).toBe(true);
});


test.each([
  've4444f', '4lok', 'klon4', '_vekon', '-bena', 'kela_', 'miron-', 'va&ni', 'lex@', 'Валерф',
])(('invalid names'), (data) => {
  expect(() => Validator.validateUsername(data)).toThrow();
});
