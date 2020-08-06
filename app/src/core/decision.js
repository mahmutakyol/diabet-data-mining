import questions from './questions'

export default {

  question_logic: {
    'POLIURI': {
      'YES': {},
      'NO': {
        'POLIDIPSI': {
          'YES': {
            'ASABILIK': {
              'YES': {
                positive: 18,
                negative: 0
              },
              'NO': {
                'KASINTI': {
                  'YES': {
                    'CINSIYET': {
                      'MALE': {
                        'SAC_DOKUMLESI': {
                          'YES': {
                            positive: 4,
                            negative: 1
                          },
                          'NO': {
                            positive: 0,
                            negative: 7
                          }
                        }
                      },
                      'FEMALE': {
                        positive: 4,
                        negative: 0
                      }
                    }
                  },
                  'NO': {}
                }
              }
            }
          },
          'NO': {
            'CINSIYET': {
              'MALE': {
                'ASABILIK': {
                  'YES': {
                    'GENITAL_PAMUKCUK': {
                      'YES': {
                        positive: 5,
                        negative: 0
                      },
                      'NO': {
                        'YAS': {
                          '42.5 < YAS': {
                            positive: 0,
                            negative: 10
                          },
                          '42.5 > YAS': {
                            positive: 2,
                            negative: 1
                          }
                        }
                      }
                    }
                  },
                  'NO': {
                    'KISMI_FELC': {
                      'YES': {
                        positive: 2,
                        negative: 14
                      },
                      'NO': {
                        'IYILESME_GECIKMESI': {
                          'YES': {
                            'YAS': {
                              '40 < YAS': {
                                positive: 1,
                                negative: 42
                              },
                              '40 > YAS': {
                                positive: 3,
                                negative: 0
                              }
                            }
                          },
                          'NO': {
                            positive: 0,
                            negative: 91
                          }
                        }
                      }
                    }
                  }
                }
              },
              'FEMALE': {
                'SAC_DOKULMESI': {
                  'YES': {
                    positive: 1,
                    negative: 13
                  },
                  'NO': {
                    'YAS': {
                      '34.5 < YAS': {
                        positive: 26,
                        negative: 1
                      },
                      '34.5 > YAS': {
                        'GORSEL_BULANIKLIK': {
                          'NO': {
                            positive: 0,
                            negative: 5
                          },
                          'YES': {
                            positive: 5,
                            negative: 0
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  setAnswer (incoming) {
    this.incomings[incoming.question](incoming.answer)
  },

  calculatePoliuriAnswer (answwer) {
    if (answer === 'YES') {

    }
  },

  calculateYasAnwser (answer) {
    if (answer === 'YES') {

    }
  },

  getQuestion () {

  }
}
