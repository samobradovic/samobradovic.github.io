import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects">
    <h2 className="projects__title">Projects and Papers</h2>
    <div className="projects__item">
      <h3 className="projects__item-title">
        Prokaryotic Gene Prediction From Whole Genome Sequences
      </h3>
      <p className="projects__abstract">
        <strong>Abstract:</strong> Accurate gene prediction is essential for understanding the
        functional landscape of prokaryotic genomes. In this work, we present a machine learning
        pipeline for predicting gene locations directly from whole genome sequences. Our method
        leverages k-mer features to distinguish coding regions from non-coding regions, enabling
        precise identification of gene structures. In silico experiments on diverse prokaryotic
        genomes demonstrate the high accuracy predictive performance of our approach.
      </p>
      <p>
        <a
          className="projects__download-link"
          href="/paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Paper (PDF)
        </a>
      </p>
    </div>
  </section>
);

export default Projects;
